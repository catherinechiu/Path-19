/* GraphQL schemas */
const { gql } = require('apollo-server');

// Define shape of data as types
export const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    password: String!
    status: String
    locations: [Location]
  }

  type Location {
    id: Int!
    longitude: Int!
    latitude: Int!
    timestamp: Int
  }

  # type Query defines all top-level entry points for queries that clients can execute
  # When a client executes a query, the query matches the shape of object types defined in schema
  query GetLocations {
    locations {
      longitude: Int
      latitude: Int
      timestamp: Int
    }
  }
  # locations query returns an array of locations
  type Query {
    locations: [Location]
  }
  # Mutation type defines entry points for write operations
  type Mutation {
    addLocation(longitude: Int, latitude: Int, timestamp: Int): Location
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    //   locations: *some function to execute SQL query*
  },
};
