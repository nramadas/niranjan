import React from 'react';
import { RenderLeafProps, RenderElementProps } from 'slate-react';

import styles from './index.module.scss';

export const Bold = (props: RenderLeafProps) => {
  return <strong className={styles.bold}>{props.children}</strong>;
};

export const Blockquote = (props: RenderElementProps) => {
  return (
    <p className={styles.blockquote} {...props.attributes}>
      {props.children}
    </p>
  );
};

export const Code = (props: RenderLeafProps) => {
  return <code className={styles.code}>{props.children}</code>;
};

export const H1 = (props: RenderElementProps) => {
  return (
    <h1 className={styles.h1} {...props.attributes}>
      {props.children}
    </h1>
  );
};

export const H2 = (props: RenderElementProps) => {
  return (
    <h2 className={styles.h2} {...props.attributes}>
      {props.children}
    </h2>
  );
};

export const Italic = (props: RenderLeafProps) => {
  return <em className={styles.italic}>{props.children}</em>;
};

export const ListItem = (props: RenderElementProps) => {
  return (
    <li className={styles.li} {...props.attributes}>
      {props.children}
    </li>
  );
};

export const OL = (props: RenderElementProps) => {
  return (
    <ol className={styles.ol} {...props.attributes}>
      {props.children}
    </ol>
  );
};

export const Paragraph = (props: RenderElementProps) => {
  return (
    <p className={styles.paragraph} {...props.attributes}>
      {props.children}
    </p>
  );
};

export const UL = (props: RenderElementProps) => {
  return (
    <ul className={styles.ul} {...props.attributes}>
      {props.children}
    </ul>
  );
};

export const Underline = (props: RenderLeafProps) => {
  return (
    <u className={styles.underline} {...props.attributes}>
      {props.children}
    </u>
  );
};
