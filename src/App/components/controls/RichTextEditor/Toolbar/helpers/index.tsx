import React, { ComponentType } from 'react';
import { Editor, Transforms, Element } from 'slate';
import { useSlate, ReactEditor } from 'slate-react';
import cx from 'classnames';

import { Type, Lists, ElementType, LeafType } from '../definitions';

import styles from './index.module.scss';

/**
 * Determines if the current element matches the given type. This will return
 * true if any of the ndoes in the element match the given type.
 */
export const currentElementIsType = (
  type: ElementType,
  editor: ReactEditor,
) => {
  const [match] = Editor.nodes(editor, {
    match: node => node.type === type,
  });

  return !!match;
};

/**
 * Toggle the current element between the given type and the "paragraph" type.
 */
export const toggleCurrentElementType = (
  type: ElementType,
  editor: ReactEditor,
) => {
  // Are the current nodes in the element of the specified type?
  const isAlreadyType = currentElementIsType(type, editor);

  // Is the type a list type? (ol, ul, or a list-item)
  const isList = Lists.has(type);

  // Flatten all the nodes in the element
  Transforms.unwrapNodes(editor, {
    match: node => Lists.has(node.type),
    split: true,
  });

  // If the nodes were in the specified type, turn the element into a
  // paragraph element instead. Otherwise, turn the nodes into a list-item
  // if dealing with a list, or whatever the speficied type was if we're not.
  Transforms.setNodes(editor, {
    type: isAlreadyType ? Type.Paragraph : isList ? Type.ListItem : type,
  });

  // If we're converting into a list, we need to wrap the flattened list-item
  // nodes with the list type itself (ol or ul);
  if (!isAlreadyType && isList) {
    Transforms.wrapNodes(editor, { type, children: [] });
  }
};

interface ElementProps {
  className?: string;
}

/**
 * Higher order component that wraps a React component and turns it into a
 * toggle button for a given element type
 */
export const asElementToggle = (
  type: ElementType,
  Component: ComponentType,
) => {
  return function Element(props: ElementProps) {
    const editor = useSlate();

    return (
      <button
        className={cx(props.className, styles.button, {
          [styles.buttonActive]: currentElementIsType(type, editor),
        })}
        onClick={event => {
          event.preventDefault();
          toggleCurrentElementType(type, editor);
        }}
      >
        <Component />
      </button>
    );
  };
};

/**
 * Determines if the current selection is of a given type. Returns true only
 * if all of the selection matches the given type.
 */
export const currentLeafIsType = (type: LeafType, editor: ReactEditor) => {
  const marks = Editor.marks(editor);
  return marks ? marks[type] === true : false;
};

/**
 * Toggle the current element between the given type and plain text.
 */
export const toggleCurrentLeafType = (type: LeafType, editor: ReactEditor) => {
  currentLeafIsType(type, editor)
    ? Editor.removeMark(editor, type)
    : Editor.addMark(editor, type, true);
};

interface LeafProps {
  className?: string;
}

/**
 * Higher order component that wraps a React component and turns it into a
 * toggle button for a given leaf type
 */
export const asLeafToggle = (type: LeafType, Component: ComponentType) => {
  return function Leaf(props: LeafProps) {
    const editor = useSlate();

    return (
      <button
        className={cx(props.className, styles.button, {
          [styles.buttonActive]: currentLeafIsType(type, editor),
        })}
        onClick={event => {
          event.preventDefault();
          toggleCurrentLeafType(type, editor);
        }}
      >
        <Component />
      </button>
    );
  };
};

/**
 * Returns the current elements that are empty
 */
export const emptyElements = (editor: ReactEditor) =>
  Array.from(Editor.nodes(editor))
    .map(node => node[0]) // extract the node from [node, path]
    .filter(node => Element.isElement(node) && Editor.isEmpty(editor, node));
