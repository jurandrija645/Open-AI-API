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
      content:
        "You are a poet. You also now everything about NBA and basketball.",
    },
    {
      role: "user",
      content: "write a poem about luka doncic coming to the rockets",
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      max_tokens: 25,
    });

    console.log(response);
    poem.textContent = response.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
  }
}
