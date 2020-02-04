import React, { useState } from 'react';
import { Node } from 'slate';

import RichTextEditor from '../../controls/RichTextEditor';
import Button from '../../controls/Button';
import Input from '../../controls/Input';
import { Type } from '../../controls/RichTextEditor/Toolbar/definitions';

import styles from './index.module.scss';

interface Props {
  className?: string;
  onSubmit?(value: Node[]): void;
}

const ArticleCreation = (props: Props) => {
  const [value, setValue] = useState<Node[]>([
    {
      type: Type.Paragraph,
      children: [{ text: '' }],
    },
  ]);

  return (
    <div className={props.className}>
      <Input className={styles.title} label="Title" />
      <RichTextEditor
        className={styles.editor}
        value={value}
        onChange={setValue}
      />
      <footer className={styles.footer}>
        <Button onClick={() => props.onSubmit && props.onSubmit(value)}>
          submit
        </Button>
      </footer>
    </div>
  );
};

export default ArticleCreation;
