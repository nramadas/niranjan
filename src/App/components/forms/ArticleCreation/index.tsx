import React, { useState } from 'react';
import { Node } from 'slate';

import RichTextEditor from '../../controls/RichTextEditor';
import Button from '../../controls/Button';
import Input from '../../controls/Input';
import { Type } from '../../controls/RichTextEditor/Toolbar/definitions';

import styles from './index.module.scss';

interface Article {
  content: Node[];
  title: string;
}

interface Props {
  className?: string;
  onSubmit?(value: Article): void;
}

const ArticleCreation = (props: Props) => {
  const [content, setContent] = useState<Node[]>([
    {
      type: Type.Paragraph,
      children: [{ text: '' }],
    },
  ]);
  const [title, setTitle] = useState<string>('');

  return (
    <div className={props.className}>
      <Input
        className={styles.title}
        label="Title"
        value={title}
        onChange={event => setTitle(event.currentTarget.value)}
      />
      <RichTextEditor
        className={styles.editor}
        value={content}
        onChange={setContent}
      />
      <footer className={styles.footer}>
        <Button
          onClick={() => props.onSubmit && props.onSubmit({ title, content })}
        >
          submit
        </Button>
      </footer>
    </div>
  );
};

export default ArticleCreation;
