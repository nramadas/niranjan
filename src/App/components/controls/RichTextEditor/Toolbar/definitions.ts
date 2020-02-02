export enum Type {
  Blockquote = 'block-quote',
  Bold = 'bold',
  Code = 'code',
  H1 = 'heading-one',
  H2 = 'heading-two',
  Italic = 'italic',
  ListItem = 'list-item',
  OL = 'numbered-list',
  Paragraph = 'paragraph',
  UL = 'bulleted-list',
  Underline = 'underline',
}

export type ElementType =
  | Type.Blockquote
  | Type.H1
  | Type.H2
  | Type.OL
  | Type.ListItem
  | Type.Paragraph
  | Type.UL;

export type LeafType = Type.Bold | Type.Code | Type.Italic | Type.Underline;

export const Lists = new Set([Type.UL, Type.OL]);
