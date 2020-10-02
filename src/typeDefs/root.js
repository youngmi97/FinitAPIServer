import { gql } from "apollo-server-express";

// Need a root/parent defintion
// Declare directives on FIELD_DEFINITION
export default gql`
  directive @auth on FIELD_DEFINITION
  directive @guest on FIELD_DEFINITION
  directive @linked on FIELD_DEFINITION

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
