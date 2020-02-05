import React from 'react';

import * as typography from './';

export const ArticleTitle = () => (
  <typography.ArticleTitle>ArticleTitle</typography.ArticleTitle>
);
export const Blockquote = () => (
  <typography.Blockquote>Blockquote</typography.Blockquote>
);
export const Bold = () => <typography.Bold>Bold</typography.Bold>;
export const Code = () => <typography.Code>Code</typography.Code>;
export const H1 = () => <typography.H1>H1</typography.H1>;
export const H2 = () => <typography.H2>H2</typography.H2>;
export const Italic = () => <typography.Italic>Italic</typography.Italic>;
export const ListItem = () => (
  <typography.ListItem>ListItem</typography.ListItem>
);
export const MainTitle = () => (
  <typography.MainTitle>MainTitle</typography.MainTitle>
);
export const OL = () => (
  <typography.OL>
    <typography.ListItem>OL</typography.ListItem>
    <typography.ListItem>OL</typography.ListItem>
    <typography.ListItem>OL</typography.ListItem>
    <typography.ListItem>OL</typography.ListItem>
    <typography.ListItem>OL</typography.ListItem>
  </typography.OL>
);
export const Paragraph = () => (
  <typography.Paragraph>Paragraph</typography.Paragraph>
);
export const UL = () => (
  <typography.UL>
    <typography.ListItem>UL</typography.ListItem>
    <typography.ListItem>UL</typography.ListItem>
    <typography.ListItem>UL</typography.ListItem>
    <typography.ListItem>UL</typography.ListItem>
    <typography.ListItem>UL</typography.ListItem>
  </typography.UL>
);
export const Underline = () => (
  <typography.Underline>Underline</typography.Underline>
);

export default { title: 'typography' };
