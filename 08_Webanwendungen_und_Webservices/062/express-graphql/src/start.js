const schema = require('./graphql-schema');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use(
  '/api/artists',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000);
