import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  // apiKey: "abc",
  dangerouslyAllowBrowser: true,
});

export default openai;
