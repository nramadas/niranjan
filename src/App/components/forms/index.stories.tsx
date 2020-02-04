import React from 'react';

import ArticleCreationComponent from './ArticleCreation';

export const ArticleCreation = () => (
  <ArticleCreationComponent
    onSubmit={value => console.log(JSON.stringify(value, undefined, 2))}
  />
);

export default { title: 'forms' };
