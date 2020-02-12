import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BlogPage from './Blog';
import RootPage from './Root';

export const Blog = () => (
  <BrowserRouter>
    <BlogPage />
  </BrowserRouter>
);

export const Root = () => (
  <BrowserRouter>
    <RootPage />
  </BrowserRouter>
);

export default { title: 'pages' };
