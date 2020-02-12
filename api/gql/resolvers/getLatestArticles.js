const rowsToArticles = require('../../helpers/rowsToArticles');
const queries = require('../../db/queries');

module.exports = ({ count, after }) =>
  (after
    ? queries.getLastestArticlesAfter(count, after)
    : queries.getLatestArticles(count)
  )
    .then(data => rowsToArticles(data.rows))
    .catch(error => {
      console.error(error);
      throw error;
    });
