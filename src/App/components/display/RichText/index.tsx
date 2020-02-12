import React from 'react';

import {
  Type,
  ElementType,
} from '../../controls/RichTextEditor/Toolbar/definitions';
import * as typography from '../../typography';

export interface Node {
  bold?: boolean;
  children?: Node[];
  code?: boolean;
  italic?: boolean;
  text?: string;
  type?: ElementType;
  underline?: boolean;
}

interface NodeProps {
  node: Node;
}

export const NodeDisplay = (props: NodeProps): JSX.Element => {
  const { node } = props;

  if (node.type) {
    const children = node.children
      ? node.children.map((child, i) => <NodeDisplay key={i} node={child} />)
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

const RichText = (props: Props) => (
  <div className={props.className}>
    {props.value.map((node, i) => (
      <NodeDisplay key={i} node={node} />
    ))}
  </div>
);

export default RichText;
