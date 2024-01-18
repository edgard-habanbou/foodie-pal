const OpenAI = require("openai");
const axios = require("axios");

const getRecipes = async (req, res) => {
  let category = req.params.category;
  if (category === "All") {
    category = null;
  }
  let items = "items:";
  if (req.user.items.length !== 0) {
    req.user.items.forEach((item) => {
      items = items + item.name + ", ";
    });
  }
  let DietairyPreferences = "DietaryPreferences: " + category + ", ";
  const pref = req.user.DietairyPreferences[0];
  if (pref !== undefined) {
    const arr = Object.entries(pref._doc);

    arr.forEach((element) => {
      if (element[0] !== "_id") {
        DietairyPreferences += element[0] + ":" + element[1] + ", ";
      }
    });
  }
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Consider yourself a machine learning model that returns recipes based on items I will give you
                give me 10 recipes
                the recipes ingredients should only contain the items given
                I might also give you dietary preferences
                you should return only a JSON object with this format: [{"id":id(from 0 and add 1 for each item), "title": recipe name, "description":desc, "calories": how many calories, "time": how much time (45m) (don't give me in hours), "instructions":["instruction1", "instruction2"...](make sure to add each instruction by itself), "ingredients": ["ingredient1", "ingredient2" ...]}]
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
    const recipes = JSON.parse(chatCompletion.choices[0].message.content);

    const fetchImagePromises = recipes.map(async (recipe, index) => {
      const encodedTitle = encodeURIComponent(recipe.title);

      await new Promise((resolve) => setTimeout(resolve, index * 500));

      const res = await axios.get(
        "https://api.bing.microsoft.com/v7.0/images/search?q=" + encodedTitle,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": process.env.BING_API_KEY,
          },
        }
      );

      recipe.imageUrl = res.data.value[0].thumbnailUrl;
    });

    await Promise.all(fetchImagePromises);

    res.send({
      recipes: recipes,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRecipes,
};
