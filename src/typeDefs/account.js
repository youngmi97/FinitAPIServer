import { gql } from "apollo-server-express";

//Query Related to Plaid Synced Bank Accounts
//Have to handle transactions separately --> Data Lake ??
// --> Fetch / Filter / Manipulate Specific Transaction Data

export default gql`
  extend type Query {
    accounts(userId: String!): [Account!]! @auth @linked
    getAccount(userId: String!, accountId: ID!): Account @auth @linked
  }

  extend type Mutation {
    # have to check that the account id is unique
    addAccount(
      plaidItemId: String!
      accountId: ID!
      userId: String!
      mask: String!
      balances: String!
      name: String!
      officialName: String!
      subtype: String!
      type: String!
    ): Account @auth
    # Not adding ! on the returned User as the operation may fail and return an error
    removeAccount(accountId: ID!, userId: String!): Boolean @auth @linked
  }

  type Account {
    plaidId: String!
    accountId: String!
    userId: String!
    name: String!
    officialName: String!
    balance: String!
    type: String!
  }

  input Balances {
    available: Int!
    current: Int!
    limit: Int!
    isoCurrencyCode: String!
    unofficialCurrencyCode: String!
  }
`;

// How to handle balances??
// "Mutation for Nested Resources"
