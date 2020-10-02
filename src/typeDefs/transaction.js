import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    transactions(userId: String!, accountId: String!): [Transaction!]!
      @auth
      @linked
    getTransaction(transactionId: String!): Transaction @auth @linked
  }

  extend type Mutation {
    # have to check that the account id is unique
    addTransaction(
      userId: String!
      accountId: String!
      amount: String!
      category: [String!]!
      date: String!
      isoCurrencyCode: String!
      name: String!
      paymentChannel: String!
      transactionId: String!
      transactionType: String!
    ): Transaction @auth @linked
  }

  type Transaction {
    userId: String!
    accountId: String!
    amount: String!
    category: [String!]!
    date: String!
    isoCurrencyCode: String!
    name: String!
    paymentChannel: String!
    transactionId: String!
    transactionType: String!
  }
`;
