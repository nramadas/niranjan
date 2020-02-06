module.exports = function rowsToArticles(rows) {
  return rows.map(row => ({
    id: row.id,
    created: row.created,
    title: row.title,
    next: row.next || null,
    prev: row.prev || null,
    content: JSON.parse(row.content),
  }));
};
