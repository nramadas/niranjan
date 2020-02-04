import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Node } from 'slate';

import AnchorButtonComponent from './AnchorButton';
import LinkButtonComponent from './LinkButton';
import RichTextEditorComponent from './RichTextEditor';
import { Type } from './RichTextEditor/Toolbar/definitions';

export const AnchorButton = () => (
  <AnchorButtonComponent href="#">AnchorButton</AnchorButtonComponent>
);

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

  return (
    <RichTextEditorComponent
      value={value}
      onChange={value => {
        console.log(JSON.stringify(value, undefined, 2));
        setValue(value);
      }}
    />
  );
};

export default { title: 'controls' };
