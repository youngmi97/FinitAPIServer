const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
const plaid = require('plaid');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

//Allow cross-origin
app.use(cors());

// Use sandbox credentials loaded onto env variable for the following
dotenv.config();
app.use(bodyParser.json());

// Save the below fields in the .env file for now
/* const client = new plaid.Client(
    process.env.PLAID_CLIENT_ID,
    process.env.PLAID_SECRET,
    process.env.PLAID_PUBLIC_KEY,
    process.env.PLAID_ENV
) */


//single endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    //client to make req to server
    graphiql: process.env.NODE_ENV === 'development',
    //graphiql: false,
    //point at an js object which have all the resolver functions --> need to match schema endpoints by name
}));

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));