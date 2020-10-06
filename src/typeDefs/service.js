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
      category: [String]!
      period: String!
      isoCurrencyCode: String!
      plan: String!
      transactionType: String
      plaidGenerated: Boolean!
    ): Service @auth

    removeSubscription(userId: String!, name: String!): Boolean @auth
  }

  # FIXED
  type Service {
    id: ID!
    user: User!
    transaction: Transaction
    name: String!
    amount: String!
    lastDate: String!
    period: String!
    isoCurrencyCode: String!
    plan: String!
    transactionType: String
    plaidGenerated: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;
