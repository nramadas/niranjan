const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const gql = require('./gql');

const app = express();
const VALID_ORIGINS = new Set(['www.niranjan.me', 'niranjan.me']);

// enable CORS
app.use(
  cors({
    origin: (origin, callback) =>
      VALID_ORIGINS.has(origin) || process.env.NODE_ENV !== 'production'
        ? callback(null, true)
        : callback(new Error('Not Allowed (CORS)')),
  }),
);

// attach gql
app.use(bodyParser.json());
app.get('/', gql);

app.post('/', (req, res, next) => {
  const { query } = req.body;

  if (query) {
    if (query.includes('mutation')) {
      console.log('\n\033[0;35m[mutation]\033[0m');
      console.log(query);
    } else {
      console.log('\n\033[0;32m[query]\033[0m');
      console.log(query);
    }
  }

  next();
});

app.use(gql);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('GQL server running on', port);
});
