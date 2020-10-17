import { gql } from "apollo-server-express";

// Modularize Schema

export default gql`
  extend type Query {
    me: User @auth
    user(id: ID!): User @auth
    users: [User!]! @auth
    getUsers: [User]
  }

  extend type Mutation {
    signUp(
      email: String!
      username: String!
      name: String!
      password: String!
    ): User @guest
    # Not adding ! on the returned User as the operation may fail and return an error
    signIn(email: String!, password: String!): User @guest
    signOut: Boolean @auth
    updateAccessToken(userId: ID!, access_token: String): User
  }

  type User {
    id: ID!
    email: String!
    username: String!
    name: String!
    accounts: [Account!]!
    services: [Service!]!
    access_token: String
    createdAt: String!
    updatedAt: String!
  }
`;
