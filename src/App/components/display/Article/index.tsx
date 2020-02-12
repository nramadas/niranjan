import React from 'react';
import cx from 'classnames';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { ArticleTitle, Paragraph } from '../../typography';
import RichText, { Node } from '../RichText';

import styles from './index.module.scss';

interface Props {
  className?: string;
  content: Node[];
  id: number;
  date: number;
  title: string;
}

const Article = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => (
    <div className={cx(props.className, styles.wrapper)} ref={ref}>
      <article className={styles.container}>
        <div className={styles.date}>
          <Paragraph>{format(new Date(props.date), 'yyyy-MM-dd')}</Paragraph>
        </div>
        <Link
          className={styles.title}
          to={`/blog/${props.id}/${encodeURIComponent(props.title)}`}
        >
          <ArticleTitle>{props.title}</ArticleTitle>
        </Link>
        <RichText className={styles.content} value={props.content} />
      </article>
    </div>
  ),
);

export default Article;
