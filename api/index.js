const express = require('express');

const gql = require('./gql');

const app = express();
app.use('/', gql);
app.listen(process.env.GQL_PORT);
