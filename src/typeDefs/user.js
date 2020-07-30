import { gql } from 'apollo-server-express';

// Modularize Schema

export default gql`
    extend type Query {
        me: User
        user(id: ID!): User
        users: [User!]!
    }

    extend type Mutation {
        signUp(email: String!, username: String!, name: String!, password: String!): User
        # Not adding ! on the returned User as the operation may fail and return an error
        signIn(email: String!, password: String!): User
        signOut: Boolean 
    }

    type User {
        id: ID!
        email: String!
        username: String!
        name: String!
        createdAt: String!
    }
`
