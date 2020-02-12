const rowsToArticles = require('../../helpers/rowsToArticles');
const queries = require('../../db/queries');

module.exports = ({ id }) =>
  queries
    .getArticle(id)
    .then(data => rowsToArticles(data.rows)[0] || null)
    .catch(error => {
      console.error(error);
      throw error;
    });
