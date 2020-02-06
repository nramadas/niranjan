const rowsToArticles = require('../../helpers/rowsToArticles');
const queries = require('../../db/queries');

module.exports = ({ count }) =>
  queries
    .getLatestArticles(count)
    .then(data => rowsToArticles(data.rows))
    .catch(error => {
      console.error(error);
      return null;
    });
