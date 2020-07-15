import { gql } from "apollo-server-express";

// Need a root/parent defintion
export default gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`;
