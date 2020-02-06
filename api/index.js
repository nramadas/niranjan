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
app.use('/', gql);

app.listen(process.env.GQL_PORT);
