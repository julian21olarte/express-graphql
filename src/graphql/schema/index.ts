import { buildSchema } from 'graphql'

// Construct a schema, using GraphQL schema language
export default buildSchema(`
  type Person {
    name: String
    gender: String
    email: String
  }
  input PersonInput {
    name: String!
    gender: String
    email: String
    type: String
  }
  type Flight {
    code: String
    origin: String
    destination: String
    passengers: [String]
  }
  type Query {
    persons: [Person]
    flights: [Flight]
    getPersonByName(name: String!): Person
    getPerson(name: String, gender: [String], email: String): [Person]
  }
  type Mutation {
    createPerson(person: PersonInput): Person!
    updatePersonByName(person: PersonInput): Person!
  }
`)
