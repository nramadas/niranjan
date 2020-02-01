import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AnchorButtonComponent from './AnchorButton';
import LinkButtonComponent from './LinkButton';

export const AnchorButton = () => (
  <AnchorButtonComponent href="#">AnchorButton</AnchorButtonComponent>
);

export const LinkButton = () => (
  <BrowserRouter>
    <LinkButtonComponent to="#">LinkButton</LinkButtonComponent>
  </BrowserRouter>
);

export default { title: 'controls' };
