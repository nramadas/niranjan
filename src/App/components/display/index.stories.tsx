import React from 'react';

import ArticleComponent from './Article';
import RichTextComponent, { Node } from './RichText';

const EXAMPLE_CONTENT = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'On the other hand',
        bold: true,
      },
      {
        text: ', we denounce with ',
      },
      {
        text: 'righteous indignation',
        italic: true,
      },
      {
        text:
          ' and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and ',
      },
      {
        text: 'trouble',
        italic: true,
      },
      {
        text:
          ' that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. ',
      },
      {
        text: 'But in certain circumstances',
        underline: true,
      },
      {
        text:
          ' and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
      },
    ],
  },
  {
    type: 'heading-one',
    children: [
      {
        text: 'More ',
      },
      {
        text: 'to',
        italic: true,
      },
      {
        text: ' come',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. ',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [
      {
        text:
          'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      },
    ],
  },
  {
    type: 'heading-two',
    children: [
      {
        text: 'And',
        bold: true,
      },
      {
        text: ' yet',
      },
    ],
  },
  {
    type: 'numbered-list',
    children: [
      {
        type: 'list-item',
        children: [
          {
            text: 'Who?',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'What?',
            bold: true,
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'When?',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'Where?',
            italic: true,
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'Why?',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'How?',
            underline: true,
          },
        ],
      },
    ],
  },
  {
    type: 'heading-two',
    children: [
      {
        text: 'And ',
      },
      {
        text: 'still',
        italic: true,
      },
    ],
  },
  {
    type: 'bulleted-list',
    children: [
      {
        type: 'list-item',
        children: [
          {
            text: 'This',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'That',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'And a third',
          },
        ],
      },
    ],
  },
] as Node[];

export const Article = () => (
  <ArticleComponent
    content={EXAMPLE_CONTENT}
    date={1580861142284}
    title="This is an example Article"
  />
);

export const Articles = () => (
  <React.Fragment>
    <ArticleComponent
      content={EXAMPLE_CONTENT}
      date={1580861142284}
      title="This is an example Article"
    />
    <ArticleComponent
      content={EXAMPLE_CONTENT}
      date={1580861142284}
      title="This is an example Article"
    />
    <ArticleComponent
      content={EXAMPLE_CONTENT}
      date={1580861142284}
      title="This is an example Article"
    />
  </React.Fragment>
);

export const RichText = () => <RichTextComponent value={EXAMPLE_CONTENT} />;

export default { title: 'display' };
