import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    transactions(userId: String!, accountId: String!): [Transaction!]! @auth
  }

  extend type Mutation {
    # have to check that the account id is unique
    addTransaction(
      accountId: ID!
      amount: String!
      category: [String!]!
      date: String!
      isoCurrencyCode: String!
      name: String!
      paymentChannel: String!
      transactionType: String!
    ): Transaction @auth
  }

  # FIXED
  type Transaction {
    id: ID!
    user: User!
    account: Account!
    amount: String!
    category: [String!]!
    categoryId: String!
    date: String!
    isoCurrencyCode: String!
    name: String!
    paymentChannel: String!
    transactionType: String!
    createdAt: String!
    updatedAt: String!
  }
`;
