// gql: Template Literal Helper
//const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
//import AuthDirective from './directives/auth';
//import GuestDirective from './directives/guest';

import schemaDirectives from './directives';


const express = require('express');
const redis = require("redis");
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
const plaid = require('plaid');
const path = require('path');
const dotenv = require('dotenv').config({path: require("find-config")(".env")});
const bodyParser = require('body-parser');
const session = require('express-session');
const connectRedis = require('connect-redis');

const cors = require('cors');
const connectDB = require('./models/connection.js');

const PORT = process.env.PORT || 5000;

//Connect to Database
connectDB();

const app = express();
app.disable('x-powered-by');

//Allow cross-origin
app.use(cors());


const {
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = 'ssh!secret!',
    SESS_LIFETIME = 1000 * 60 * 60 * 2, // 2 hours 
    REDIS_HOST,
    REDIS_PORT,
    REDIS_PASSWORD,
} = process.env;
const IN_PROD = NODE_ENV === 'production';

// Use sandbox credentials loaded onto env variable for the following
// dotenv.config();
app.use(bodyParser.json());

// Have to create Redis cluster on aws --> Create Redis DB
// Detailed instructions on redislabs documentation --> RaaS
// https://docs.redislabs.com/latest/rs/administering/database-operations/creating-database/
const RedisStore = connectRedis(session);

// Generate redis client
let redisClient = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
  no_ready_check: true,
  auth_pass: REDIS_PASSWORD,
});


const store = new RedisStore({
    client: redisClient
});

app.use(session({
    store,
    name: SESS_NAME,
    secret: SESS_SECRET,
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: Number(SESS_LIFETIME),
        sameSite: true,
        secure: IN_PROD
    }
}));

// ttl on redis-cli to check session expiration time


//Setup ApolloSever MiddleWare 
//enable access to req object from the resolver by passing the 'context' 
//cors: false disables query from other endpoints (for security) 
//request.credentials to visualize session cookies from graphiql 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  playground: IN_PROD ? false : {
      settings: {
          'request.credentials': 'include'
      }
  },
  context: ({ req, res }) => ({ req, res })
});

server.applyMiddleware({ app, cors: false });

// Save the below fields in the .env file for now
/* const client = new plaid.Client(
    process.env.PLAID_CLIENT_ID,
    process.env.PLAID_SECRET,
    process.env.PLAID_PUBLIC_KEY,
    process.env.PLAID_ENV
) */

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));