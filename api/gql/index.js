const graphqlHTTP = require('express-graphql');

const resolvers = require('./resolvers');
const schema = require('./schema');

module.exports = graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: process.env.NODE_ENV !== 'production',
});
