const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const plaid = require("plaid");

const app = express();
const PORT = process.env.PORT || 5000;


const plaidClient = new plaid.Client(
  process.env.PLAID_CLIENT_ID,
  process.env.PLAID_SECRET,
  process.env.PUBLIC_KEY,
  plaid.environments.sandbox,
  { version: "2018-05-22" }
);

//single endpoint
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        //client to make req to server
        graphiql: true,
    }),
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));