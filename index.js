import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const button = document.getElementById("getPoem");
button.addEventListener("click", async () => getPoem());

const poem = document.getElementById("poem");
console.log(import.meta.env.VITE_OPENAI_API_KEY);

async function getPoem() {
  const messages = [
    {
      role: "system",
      content: "You are a poet. You also now everything about NBA.",
    },
    {
      role: "user",
      content: "write a poem about luka doncic coming to the lakers",
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
    });

    console.log(response);
    poem.textContent = response.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
  }
}
