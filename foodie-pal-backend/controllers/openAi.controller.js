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
          content: `Consider yourself a machine-learning model that returns recipes based on items I will give you.
          the recipe's ingredients should only contain the items given but you can add spices.
          give small instructions for example: "Boil the water" or "Cut the onion into cubes".
          I might also give you dietary preferences
          You should return only a JSON object with this format: [{"id": id(from 0 and add 1 for each item), "title": recipe name, "description":description, "calories": how many calories, "time": how much time (45m) (don't give me in hours), "instructions":["instruction1", "instruction2"...](make sure to add each instruction by itself), "ingredients": ["ingredient1", "ingredient2" ...]}]
          Don't add anything else to the object
          ${items}
          ${DietairyPreferences}
          Please make sure that you don't give me less than 10 recipes and don't give me more than 20
          Give me only the JSON object and remove all texts before and after it.`,
        },
      ],
      model: "gpt-3.5-turbo-1106",
      max_tokens: 3700,
    });
    const recipes = JSON.parse(chatCompletion.choices[0].message.content);

    const fetchImagePromises = recipes.map(async (recipe, index) => {
      const encodedTitle = encodeURIComponent(recipe.title);

      try {
        await new Promise((resolve, rej) => setTimeout(resolve, 500));
        const res = await axios.get(
          "https://api.bing.microsoft.com/v7.0/images/search?q=" + encodedTitle,
          {
            headers: {
              "Ocp-Apim-Subscription-Key": process.env.BING_API_KEY,
            },
          }
        );
        const thumbnailUrl = res.data.value[0].thumbnailUrl;
        if (!thumbnailUrl.includes("tse2.mm")) {
          recipe.imageUrl = thumbnailUrl;
        } else {
          recipe.imageUrl = `${process.env.SERVER_LINK}/default-item.png`;
        }
      } catch (e) {
        recipe.imageUrl = `${process.env.SERVER_LINK}/default-item.png`;
      }
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
  makeDietPlan,
};
