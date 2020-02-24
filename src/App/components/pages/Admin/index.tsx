import React, { useState } from 'react';
import nacl from 'tweetnacl';
import { useMutation } from 'urql';
import { useHistory } from 'react-router-dom';

import ArticleCreation from '../../forms/ArticleCreation';
import Input from '../../controls/Input';
import { Paragraph } from '../../typography';

import styles from './index.module.scss';

const createArticleMutation = `
  mutation CreateArticle($title: String!, $content: [ContentNode]!, $boxedContent: String!, $boxedTitle: String!) {
    createArticle(title: $title, content: $content, boxedContent: $boxedContent, boxedTitle: $boxedTitle)
  }
`;

const Admin = () => {
  const [key, setKey] = useState<Uint8Array | null>(null);
  const [createArticleResult, createArticle] = useMutation(
    createArticleMutation,
  );
  const history = useHistory();

  if (!key) {
    return (
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          const input = e.currentTarget.elements[0] as HTMLInputElement;
          const value = input.value;
          const encoder = new TextEncoder();
          const hash = nacl.hash(encoder.encode(value));
          const bytes = hash.slice(0, 32);
          const keys = nacl.sign.keyPair.fromSeed(bytes);
          setKey(keys.secretKey);
        }}
      >
        <Input label="secret" type="password" />
      </form>
    );
  }

  return (
    <div className={styles.creation}>
      <ArticleCreation
        onSubmit={article => {
          const { content, title } = article;
          const contentStr = JSON.stringify(content);
          const encoder = new TextEncoder();
          const boxedContent = nacl
            .sign(encoder.encode(contentStr), key)
            .toString();
          const boxedTitle = nacl.sign(encoder.encode(title), key).toString();

          createArticle({
            boxedContent,
            boxedTitle,
            content,
            title,
          }).then(result => {
            if (!result.error) {
              history.push('/blog');
            }
          });
        }}
      />
      {createArticleResult.error && (
        <div className={styles.error}>
          <Paragraph>Something wen't wrong.</Paragraph>
        </div>
      )}
    </div>
  );
};

export default Admin;
