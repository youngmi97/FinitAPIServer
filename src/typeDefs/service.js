import { gql } from "apollo-server-express";

export default gql`
  extend type Mutation {
    # have to check that the account id is unique
    addSubscription(
      userId: ID!
      transactionId: ID
      name: String!
      amount: String!
      lastDate: String!
      category: [String!]!
      period: String!
      isoCurrencyCode: String!
      plan: String!
      transactionType: String!
      plaidGenerated: Boolean!
      firstAddedDate: String!
    ): Service @auth

    removeSubscription(userId: ID!, name: String!, plan: String!): Boolean @auth

    #How to identify the corresponding service that I have added
    editSubscription(
      userId: ID!
      name: String!
      amount: String!
      lastDate: String!
      period: String!
      plan: String!
      plaidGenerated: Boolean!
      firstAddedDate: String!
    ): Boolean @auth
  }

  # FIXED
  type Service {
    id: ID!
    user: User!
    transaction: Transaction
    name: String!
    amount: String!
    lastDate: String!
    category: [String!]!
    period: String!
    isoCurrencyCode: String!
    plan: String!
    transactionType: String!
    plaidGenerated: Boolean!
    firstAddedDate: String!
    createdAt: String!
    updatedAt: String!
  }
`;
