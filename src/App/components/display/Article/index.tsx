import React from 'react';
import cx from 'classnames';
import { format } from 'date-fns';

import { ArticleTitle, Paragraph } from '../../typography';
import RichText, { Node } from '../RichText';

import styles from './index.module.scss';

interface Props {
  className?: string;
  content: Node[];
  date: number;
  title: string;
}

const Article = (props: Props) => (
  <div className={cx(props.className, styles.wrapper)}>
    <article className={styles.container}>
      <div className={styles.date}>
        <Paragraph>{format(new Date(props.date), 'yyyy-MM-dd')}</Paragraph>
      </div>
      <div className={styles.title}>
        <ArticleTitle>{props.title}</ArticleTitle>
      </div>
      <RichText className={styles.content} value={props.content} />
    </article>
  </div>
);

export default Article;
