const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const rowsToArticle = require('./rowsToArticle');
const runQuery = require('./runQuery');

const schema = buildSchema(`
  type Node {
    bold: Boolean
    children: [Node]
    code: Boolean
    italic: Boolean
    text: String
    type: String
    underline: Boolean
  }

  type Article {
    id: ID!
    title: String!
    created: Int!
    next: String
    prev: String
    content: [Node]
  }

  type Query {
    getArticle(id: ID!): Article
    getLastestArticle: Article
  }

  input ContentNode {
    bold: Boolean
    children: [ContentNode]
    code: Boolean
    italic: Boolean
    text: String
    type: String
    underline: Boolean
  }

  type Mutation {
    createArticle(title: String!, content: [ContentNode]!): Boolean
  }
`);

const root = {
  createArticle: async ({ content, title }) => {
    const contentStr = JSON.stringify(content);
    const created = Date.now();
    const latestArticle = await root.getLastestArticle();

    if (latestArticle) {
      await runQuery`
        UPDATE articles
        SET next = ${latestArticle.id + 1}
        WHERE id = ${latestArticle.id} AND partition_key = 1
      `;

      return runQuery`
        INSERT INTO articles (
          partition_key,
          id,
          created,
          title,
          content,
          prev
        ) values (
          1,
          ${latestArticle.id + 1},
          ${created},
          ${title},
          ${contentStr},
          ${latestArticle.id}
        )
      `.then(() => true);
    }

    return runQuery`
      INSERT INTO articles (
        partition_key,
        id,
        created,
        title,
        content
      ) values (
        1,
        ${1},
        ${created},
        ${title},
        ${contentStr}
      )
    `.then(() => true);
  },
  getArticle: ({ id }) =>
    runQuery`
    SELECT id, created, title, next, prev, content
    FROM articles
    WHERE id = ${id} AND partition_key = 1
  `.then(data => rowsToArticle(data.rows)),
  getLastestArticle: () =>
    runQuery`
    SELECT id, created, title, next, prev, content
    FROM articles
    WHERE partition_key = 1
    ORDER BY id
    DESC
    LIMIT 1
  `.then(data => rowsToArticle(data.rows)),
};

const app = express();
app.use(
  '/',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(process.env.GQL_PORT);
