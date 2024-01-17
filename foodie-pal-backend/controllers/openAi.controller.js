const OpenAI = require("openai");
const getRecipes = async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const chatCompletion = await openai.chat.completions.create({
    messages: `const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });`,
    model: "gpt-3.5-turbo",
  });
};

module.exports = {
  getRecipes,
};
