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
    name: String
    ID: String!
    passwordHash: String
    role: [String!]!
    token: String
  }
  
  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie
    users: [User]!
    me: User!
  }

  type Mutation {
    addMovie(name: String!, rating: Int!): Movie!
    addUser(ID: String!, password: String!): User
    signup(name: String!, ID: String!, password: String!): Boolean!
    login(ID: String!, password: String!): User
    logout: Boolean!
  }
`;

export default typeDefs;
