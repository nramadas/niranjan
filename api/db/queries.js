const runQuery = require('./runQuery');

module.exports = {
  createArticle: (title, content, id, created, prev) => runQuery`
    INSERT INTO articles (
      partition_key,
      id,
      created,
      title,
      content,
      prev
    ) values (
      1,
      ${id},
      ${created},
      ${title},
      ${content},
      ${prev}
    )
  `,
  createFirstArticle: (title, content, created) => runQuery`
    INSERT INTO articles (
      partition_key,
      id,
      created,
      title,
      content
    ) values (
      1,
      1,
      ${created},
      ${title},
      ${content}
    )
  `,
  getArticle: id => runQuery`
    SELECT id, created, title, next, prev, content
    FROM articles
    WHERE id = ${id} AND partition_key = 1
  `,
  getLatestArticles: count => runQuery`
    SELECT id, created, title, next, prev, content
    FROM articles
    WHERE partition_key = 1
    ORDER BY id
    DESC
    LIMIT ${count}
  `,
  getLastestArticlesAfter: (count, after) => runQuery`
    SELECT id, created, title, next, prev, content
    FROM articles
    WHERE partition_key = 1 AND id < ${after}
    ORDER BY id
    DESC
    LIMIT ${count}
  `,
  updateArticleNextPointer: (id, next) => runQuery`
    UPDATE articles
    SET next = ${next}
    WHERE id = ${id} AND partition_key = 1
  `,
};
