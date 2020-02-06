module.exports = function rowsToArticle(rows) {
  const article = rows[0];

  if (article) {
    return {
      id: article.id,
      created: article.created,
      title: article.title,
      next: article.next || null,
      prev: article.prev || null,
      content: JSON.parse(article.content),
    };
  }

  return null;
};
