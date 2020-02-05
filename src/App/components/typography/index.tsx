import React from 'react';

import styles from './index.module.scss';
import nodeStyles from '../controls/RichTextEditor/nodes/index.module.scss';

interface Props {
  children: React.ReactNode;
}

export const ArticleTitle = (props: Props) => (
  <h1 className={styles.articleTitle}>{props.children}</h1>
);
export const Blockquote = (props: Props) => (
  <p className={nodeStyles.blockquote}>{props.children}</p>
);
export const Bold = (props: Props) => (
  <strong className={nodeStyles.bold}>{props.children}</strong>
);
export const Code = (props: Props) => (
  <code className={nodeStyles.code}>{props.children}</code>
);
export const H1 = (props: Props) => (
  <h1 className={nodeStyles.h1}>{props.children}</h1>
);
export const H2 = (props: Props) => (
  <h2 className={nodeStyles.h2}>{props.children}</h2>
);
export const Italic = (props: Props) => (
  <em className={nodeStyles.italic}>{props.children}</em>
);
export const ListItem = (props: Props) => (
  <li className={nodeStyles.li}>{props.children}</li>
);
export const MainTitle = (props: Props) => (
  <h1 className={styles.mainTitle}>{props.children}</h1>
);
export const OL = (props: Props) => (
  <ol className={nodeStyles.ol}>{props.children}</ol>
);
export const Paragraph = (props: Props) => (
  <p className={nodeStyles.paragraph}>{props.children}</p>
);
export const UL = (props: Props) => (
  <ul className={nodeStyles.ul}>{props.children}</ul>
);
export const Underline = (props: Props) => (
  <u className={nodeStyles.underline}>{props.children}</u>
);
