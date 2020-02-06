const getLatestArticles = require('./getLatestArticles');
const queries = require('../../db/queries');

module.exports = async ({ content, title }) => {
  const contentStr = JSON.stringify(content);
  const created = Date.now();
  const [latestArticle] = await getLatestArticles(1);

  if (latestArticle) {
    const prev = latestArticle.id;
    const id = prev + 1;

    return queries
      .createArticle(title, contentStr, id, created, prev)
      .then(() => {
        // if we successfully created the article, update the previous latest
        // article to point to this one.
        return queries.updateArticleNextPointer(prev, id).then(() => true);
      })
      .catch(error => {
        console.error(error);
        return false;
      });
  }

  return queries
    .createFirstArticle(title, contentStr, created)
    .then(() => true)
    .catch(error => {
      console.error(error);
      return false;
    });
};
