const OpenAI = require("openai");

const getRecipes = async (req, res) => {
  let items = "items:";
  let DietairyPreferences = "DietairyPreferences: ";
  req.user.items.forEach((item) => {
    items = items + item.name + ", ";
  });
  const pref = req.user.DietairyPreferences[0];
  const arr = Object.entries(pref._doc);

  arr.forEach((element) => {
    if (element[0] !== "_id") {
      DietairyPreferences += element[0] + ":" + element[1] + ", ";
    }
  });
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Consider yourself a machine learning model that returns  recipes based on items i will give you
                give me 10 recipes
                the recipes ingredients should only contain the items given
                I might also give you dietairy preferences
                you should return only a JSON object with this format: [{"id":id(from 0 and add 1 for each item), "title": recipe name, "description":desc, "calories": how many calories, "time": how much time (45m, 1hr...), "instructions":["instruction1", "instruction2"...](make sure to add each instruction by itself), "ingredients": ["ingredient1", "ingredient2" ...]}]
                don't add anything else to the object
                ${items}
                ${DietairyPreferences}
                don't give me less than 10 recipes
                give me only the JSON object remove all texts before and after and between it `,
        },
      ],
      model: "gpt-3.5-turbo-1106",
      max_tokens: 3700,
    });
    res.send({
      recipes: JSON.parse(chatCompletion.choices[0].message.content),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getRecipes,
};
