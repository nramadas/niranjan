import React, { useMemo, useCallback } from 'react';
import { createEditor, Node } from 'slate';
import {
  Slate,
  Editable,
  withReact,
  RenderElementProps,
  RenderLeafProps,
} from 'slate-react';
import cx from 'classnames';

import * as nodes from './nodes';
import Toolbar from './Toolbar';
import { Type, ElementType } from './Toolbar/definitions';
import {
  toggleCurrentLeafType,
  toggleCurrentElementType,
  currentElementIsType,
  emptyElements,
} from './Toolbar/helpers';

import styles from './index.module.scss';

const CONVERT_TO_PARAGRAPH_ON_BACKSPACE: ElementType[] = [
  Type.Blockquote,
  Type.OL,
  Type.UL,
];

interface Props {
  className?: string;
  value: Node[];
  onChange?(value: Node[]): void;
}

const RichTextEditor = (props: Props) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case Type.Blockquote:
        return <nodes.Blockquote {...props} />;
      case Type.H1:
        return <nodes.H1 {...props} />;
      case Type.H2:
        return <nodes.H2 {...props} />;
      case Type.ListItem:
        return <nodes.ListItem {...props} />;
      case Type.OL:
        return <nodes.OL {...props} />;
      case Type.UL:
        return <nodes.UL {...props} />;
      default:
        return <nodes.Paragraph {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    let children = props.children;
    if (props.leaf.bold) {
      children = <nodes.Bold {...props} />;
    }
    if (props.leaf.code) {
      children = <nodes.Code {...props} />;
    }
    if (props.leaf.italic) {
      children = <nodes.Italic {...props} />;
    }
    if (props.leaf.underline) {
      children = <nodes.Underline {...props} />;
    }
    return <span {...props.attributes}>{children}</span>;
  }, []);

  return (
    <div className={cx(styles.container, props.className)}>
      <Slate
        editor={editor}
        value={props.value}
        onChange={value => props.onChange && props.onChange(value)}
      >
        <Toolbar className={styles.toolbar} />
        <Editable
          className={styles.editor}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={event => {
            if (event.metaKey) {
              switch (event.key) {
                case '`':
                  return toggleCurrentLeafType(Type.Code, editor);
                case 'b':
                  return toggleCurrentLeafType(Type.Bold, editor);
                case 'i':
                  return toggleCurrentLeafType(Type.Italic, editor);
                case 'u':
                  return toggleCurrentLeafType(Type.Underline, editor);
              }
            }

            if (event.key === 'Backspace') {
              // Find the element we're currently removing content from.
              // If this element is a list item or a quote block, when the
              // element empties, replace it with an empty paragraph
              CONVERT_TO_PARAGRAPH_ON_BACKSPACE.forEach(type => {
                if (currentElementIsType(type, editor)) {
                  if (emptyElements(editor).length) {
                    event.preventDefault();
                    toggleCurrentElementType(type, editor);
                  }
                }
              });
            }
          }}
        />
      </Slate>
    </div>
  );
};

export default RichTextEditor;
