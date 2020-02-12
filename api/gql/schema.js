const { buildSchema } = require('graphql');

module.exports = buildSchema(`
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
    created: Float!
    next: String
    prev: String
    content: [Node]
  }

  type Query {
    getArticle(id: ID!): Article
    getLatestArticles(count: Int!, after: ID): [Article]
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
