/**
 * GraphQL type definitions
 */
const typeDefs = /* GraphQL */ `
  type Query {
    feedback(id: Int!): Feedback
    feedbacks(page: Int!, per_page: Int!): [Feedback!]!
  }
  
  type Mutation {
    createFeedback(text: String!): Feedback!
  }

  type Feedback {
    id: Int!
    text: String!
  }
`;

export default typeDefs;