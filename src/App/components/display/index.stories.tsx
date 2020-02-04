import React from 'react';

import RichTextDisplayComponent from './RichTextDisplay';
import {
  Type,
  ElementType,
} from '../controls/RichTextEditor/Toolbar/definitions';

export const RichTextDisplay = () => (
  <RichTextDisplayComponent
    value={[
      {
        type: Type.Paragraph as ElementType,
        children: [
          {
            text: 'asdf ',
          },
          {
            text: 'asdf',
            bold: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            italic: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            underline: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            code: true,
          },
          {
            text: ' asdf',
          },
        ],
      },
      {
        type: Type.H1 as ElementType,
        children: [
          {
            text: 'asdf ',
          },
          {
            text: 'asdf',
            bold: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            italic: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            underline: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            code: true,
          },
          {
            text: ' asdf',
          },
        ],
      },
      {
        type: Type.H2 as ElementType,
        children: [
          {
            text: 'asdf ',
          },
          {
            text: 'asdf',
            bold: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            italic: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            underline: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            code: true,
          },
          {
            text: ' asdf',
          },
        ],
      },
      {
        type: Type.Blockquote as ElementType,
        children: [
          {
            text: 'asdf ',
          },
          {
            text: 'asdf',
            bold: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            italic: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            underline: true,
          },
          {
            text: ' ',
          },
          {
            text: 'asdf',
            code: true,
          },
          {
            text: ' asdf',
          },
        ],
      },
      {
        type: Type.OL as ElementType,
        children: [
          {
            type: Type.ListItem as ElementType,
            children: [
              {
                text: 'asdf ',
              },
              {
                text: 'asdf',
                bold: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                italic: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                underline: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                code: true,
              },
              {
                text: ' asdf',
              },
            ],
          },
          {
            type: Type.ListItem as ElementType,
            children: [
              {
                text: 'asdf ',
              },
              {
                text: 'asdf',
                bold: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                italic: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                underline: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                code: true,
              },
              {
                text: ' asdf',
              },
            ],
          },
        ],
      },
      {
        type: Type.UL as ElementType,
        children: [
          {
            type: Type.ListItem as ElementType,
            children: [
              {
                text: 'asdf ',
              },
              {
                text: 'asdf',
                bold: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                italic: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                underline: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                code: true,
              },
              {
                text: ' asdf',
              },
            ],
          },
          {
            type: Type.ListItem as ElementType,
            children: [
              {
                text: 'asdf ',
              },
              {
                text: 'asdf',
                bold: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                italic: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                underline: true,
              },
              {
                text: ' ',
              },
              {
                text: 'asdf',
                code: true,
              },
              {
                text: ' asdf',
              },
            ],
          },
        ],
      },
      {
        type: Type.Paragraph,
        children: [
          {
            text: '',
          },
        ],
      },
    ]}
  />
);

export default { title: 'display' };
