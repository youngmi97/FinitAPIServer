import { gql } from "apollo-server-express";

//Query Related to Plaid Synced Bank Accounts
//Have to handle transactions separately --> Data Lake ??
// --> Fetch / Filter / Manipulate Specific Transaction Data

// For now ignore the Linked auth
export default gql`
  extend type Mutation {
    # have to check that the account id is unique
    addAccount(
      accountId: String!
      plaidId: String!
      userId: ID!
      name: String!
      officialName: String!
      balance: String!
      type: String!
    ): Account @auth
    # Not adding ! on the returned User as the operation may fail and return an error
    removeAccount(accountId: ID!, userId: String!): Boolean @auth
  }

  # FIXED
  type Account {
    id: ID!
    accountId: String!
    plaidId: String!
    user: User!
    transactions: [Transaction!]!
    name: String!
    officialName: String!
    balance: String!
    type: String!
    createdAt: String!
    updatedAt: String!
  }
`;

// How to handle balances??
// "Mutation for Nested Resources"
