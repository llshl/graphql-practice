// src/graphql/typeDefs.js
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    id: Int!
    name: String!
    rating: Int!
  }

  type User {
    id: Int!
    ID: String!
    password: String!
  }
  
  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie
    users: [User]!
  }

  type Mutation {
    addMovie(name: String!, rating: Int!): Movie!
    addUser(ID: String!, password: String!): User
  }
`;

export default typeDefs;
