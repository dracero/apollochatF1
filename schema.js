import gql from 'graphql-tag';

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Nlu" type defines the queryable fields for every nlu in our data source.
  type Nlu {
    name: String
    text: String
  }

  type Response {
    intent: Nlu
    entity: Nlu
    role: Nlu
    trait: Nlu
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "nlus" query returns an array of zero or more Nlus (defined above).
  type Query {
    nlus(intent: String!, entity: String!, role: String, trait: String!): Response
  }
`;

export default typeDefs;
