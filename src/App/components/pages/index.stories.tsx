import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootPage from './Root';

export const Root = () => (
  <BrowserRouter>
    <RootPage />
  </BrowserRouter>
);

export default { title: 'pages' };
