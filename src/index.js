// gql: Template Literal Helper
//const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
//import AuthDirective from './directives/auth';
//import GuestDirective from './directives/guest';

import schemaDirectives from "./directives";

var moment = require("moment");
const cron = require("node-cron");
const { request } = require("graphql-request");
const express = require("express");
const redis = require("redis");
const graphqlHTTP = require("express-graphql");
const plaid = require("plaid");
const path = require("path");
const dotenv = require("dotenv").config({
  path: require("find-config")(".env"),
});
const bodyParser = require("body-parser");
const session = require("express-session");
const connectRedis = require("connect-redis");

const cors = require("cors");
const connectDB = require("./models/connection.js");
const {
  monitorUserChange,
  regularSubscriptionExtract,
} = require("./changestream");

const PORT = process.env.PORT || 5000;

//Connect to Database
connectDB().then(async () => {
  await monitorUserChange();
  //await regularSubscriptionExtract();
});

const app = express();
app.disable("x-powered-by");

//Allow cross-origin
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

const {
  NODE_ENV = "development",
  SESS_NAME = "sid",
  SESS_SECRET = "ssh!secret!",
  SESS_LIFETIME = 1000 * 60 * 60 * 2, // 2 hours
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD,
} = process.env;
const IN_PROD = NODE_ENV === "production";

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
  client: redisClient,
});

app.use(
  session({
    store,
    name: SESS_NAME,
    secret: SESS_SECRET,
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      maxAge: Number(SESS_LIFETIME),
      sameSite: true,
      secure: IN_PROD,
    },
  })
);

// ttl on redis-cli to check session expiration time

//Setup ApolloSever MiddleWare
//enable access to req object from the resolver by passing the 'context'
//cors: false disables query from other endpoints (for security)
//request.credentials to visualize session cookies from graphiql
const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  playground: IN_PROD
    ? false
    : {
        settings: {
          "request.credentials": "include",
        },
      },
  context: ({ req, res }) => ({ req, res }),
});

server.applyMiddleware({ app, cors: false });

// Save the below fields in the .env file for now
const client = new plaid.Client(
  process.env.PLAID_CLIENT_ID,
  process.env.PLAID_SECRET,
  process.env.PLAID_PUBLIC_KEY,
  plaid.environments.sandbox
);

var PUBLIC_TOKEN = null;
var ACCESS_TOKEN = null;
var ITEM_ID = null;

app.post("/auth/public_token", async (req, res) => {
  let PUBLIC_TOKEN = req.body.public_token;

  client.exchangePublicToken(PUBLIC_TOKEN, function (error, tokenResponse) {
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    res.json({
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID,
    });
  });
});

app.get("/transactions", async (req, res) => {
  // Pull transactions for the last 30 days
  let startDate = moment().subtract(365, "days").format("YYYY-MM-DD");
  let endDate = moment().format("YYYY-MM-DD");
  console.log("made it past variables");
  client.getTransactions(
    ACCESS_TOKEN,
    startDate,
    endDate,
    {
      count: 400,
      offset: 0,
    },
    function (error, transactionsResponse) {
      res.json({ transactions: transactionsResponse });
      // TRANSACTIONS LOGGED BELOW!
      // They will show up in the terminal that you are running nodemon in.
      //console.log("----------------------------------");
      //console.log("No. Accounts", transactionsResponse["accounts"].length);
      //console.log("accounts info", transactionsResponse["accounts"]);
      //console.log("----------------------------------");
      //console.log(
      //  "No. Transactions",
      //  transactionsResponse["transactions"].length
      //);
      //console.log("transaction info", transactionsResponse["transactions"]);

      // transactionsResponse Structure
      //
    }
  );
});

// LOOKUP LINK TOKEN --> from Plaid documentation --> why is it better??

// Change Stream Functions --> Monitor and act upon changes in the DB

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
