const nacl = require('tweetnacl');
const equals = require('ramda/src/equals');

const getLatestArticles = require('./getLatestArticles');
const queries = require('../../db/queries');

const pkeyStr = process.env.PUBLIC_KEY || '';
const publicKey = new Uint8Array(pkeyStr.split(','));

module.exports = async ({ boxedContent, boxedTitle, content, title }) => {
  const contentStr = JSON.stringify(content);
  const created = Date.now();
  const [latestArticle] = await getLatestArticles(1);
  const decoder = new TextDecoder();

  const unboxedContent = JSON.parse(
    decoder.decode(
      nacl.sign.open(new Uint8Array(boxedContent.split(',')), publicKey),
    ),
  );

  const unboxedTitle = decoder.decode(
    nacl.sign.open(new Uint8Array(boxedTitle.split(',')), publicKey),
  );

  if (!equals(unboxedContent, content) || unboxedTitle !== title) {
    console.log('Not Authorized');
    throw new Error('Not Authorized');
  }

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
        throw error;
      });
  }

  return queries
    .createFirstArticle(title, contentStr, created)
    .then(() => true)
    .catch(error => {
      console.error(error);
      throw error;
    });
};
