import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const messages = [
  {
    role: "system",
    content: "You are a poet.",
  },
  {
    role: "user",
    content: "write a poem about NBA",
  },
];

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [{ role: "user", content: "write a song about AI" }],
});

console.log(response.choices[0].message.content);
