import {makeExecutableSchema} from "@graphql-tools/schema";

const typeDefinitions = /* GraphQL */ `
  type Query {
    feedback(id: Int!): Feedback
  }
  type Mutation {
    createFeedback(text: String): Feedback
  }
  
  type Feedback {
    id: Int
    text: String
  }
`;

const resolvers = {
  Query: {
    feedback: () => ({id: 1, text: "Hello"})
  }
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})