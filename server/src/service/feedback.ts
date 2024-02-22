import feedbackStore from "../store/feedback";
import prompt from "../ai/prompt";

/**
 * Creates a feedback entry and runs analysis on it.
 * @param text The feedback to create
 */
const createFeedback = async (text: string) => {
  const feedback = await feedbackStore.createFeedback(text);
  const analysisResult = await prompt.runFeedbackAnalysis(feedback.text);

  // TODO: Persist the highlights

  return feedback;
}

export default {
  createFeedback
}