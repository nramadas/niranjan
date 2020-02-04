import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Node } from 'slate';

import AnchorButtonComponent from './AnchorButton';
import ButtonComponent from './Button';
import InputComponent from './Input';
import LinkButtonComponent from './LinkButton';
import RichTextEditorComponent from './RichTextEditor';
import { Type } from './RichTextEditor/Toolbar/definitions';

export const AnchorButton = () => (
  <AnchorButtonComponent href="#">AnchorButton</AnchorButtonComponent>
);

export const Button = () => <ButtonComponent>Button</ButtonComponent>;

export const Input = () => <InputComponent label="Input" />;

export const LinkButton = () => (
  <BrowserRouter>
    <LinkButtonComponent to="#">LinkButton</LinkButtonComponent>
  </BrowserRouter>
);

export const RichTextEditor = () => {
  const [value, setValue] = useState<Node[]>([
    {
      type: Type.Paragraph,
      children: [{ text: '' }],
    },
  ]);

  return <RichTextEditorComponent value={value} onChange={setValue} />;
};

export default { title: 'controls' };
