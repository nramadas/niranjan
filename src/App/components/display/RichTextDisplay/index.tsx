import React from 'react';

import {
  Type,
  ElementType,
} from '../../controls/RichTextEditor/Toolbar/definitions';
import * as typography from '../../typography';

interface ElementProps {
  children?: Node[];
  type: ElementType;
}

interface LeafProps {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  text?: string;
  underline?: boolean;
}

type Node = ElementProps | LeafProps;

interface NodeProps {
  node: Node;
}

export const NodeDisplay = (props: NodeProps): JSX.Element => {
  const { node } = props;

  if ('type' in node) {
    const children = node.children
      ? node.children.map(child => <NodeDisplay node={child} />)
      : null;

    switch (node.type) {
      case Type.Blockquote:
        return <typography.Blockquote>{children}</typography.Blockquote>;
      case Type.H1:
        return <typography.H1>{children}</typography.H1>;
      case Type.H2:
        return <typography.H2>{children}</typography.H2>;
      case Type.ListItem:
        return <typography.ListItem>{children}</typography.ListItem>;
      case Type.OL:
        return <typography.OL>{children}</typography.OL>;
      case Type.UL:
        return <typography.UL>{children}</typography.UL>;
      default:
        return <typography.Paragraph>{children}</typography.Paragraph>;
    }
  } else {
    let children: JSX.Element = <span>{node.text}</span>;

    if (node.bold) {
      children = <typography.Bold>{children}</typography.Bold>;
    }
    if (node.code) {
      children = <typography.Code>{children}</typography.Code>;
    }
    if (node.italic) {
      children = <typography.Italic>{children}</typography.Italic>;
    }
    if (node.underline) {
      children = <typography.Underline>{children}</typography.Underline>;
    }

    return children;
  }
};

interface Props {
  className?: string;
  value: Node[];
}

const RichTextDisplay = (props: Props) => (
  <div className={props.className}>
    {props.value.map(node => (
      <NodeDisplay node={node} />
    ))}
  </div>
);

export default RichTextDisplay;
