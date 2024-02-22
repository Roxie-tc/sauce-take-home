import OpenAI from "openai";

const openAIClient = new OpenAI.OpenAI({
  apiKey: process.env.OPENAI_SECRET
});

export default openAIClient;