import feedbackStore from "../store/feedback";

/**
 * GraphQL Resolvers
 */
const resolvers = {
  Query: {
    feedback: (parent: unknown, args: {id: number}) => {
      return feedbackStore.getFeedback(args.id)
    },
    feedbacks: (parent: unknown, args: { page: number; per_page: number }) => {
      return feedbackStore.getFeedbackPage(args.page, args.per_page)
    },
  },
  Mutation: {
    createFeedback: (parent: unknown, args: { text: string }) => {
      return feedbackStore.createFeedback(args.text)
    }
  }
};

export default resolvers;