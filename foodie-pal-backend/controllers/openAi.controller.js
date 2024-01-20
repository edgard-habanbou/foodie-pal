const OpenAI = require("openai");
const axios = require("axios");
const User = require("../models/user.model");

const getRecipes = async (req, res) => {
  console.log(req.user);
  // const pref = req.user.DietairyPreferences[0];
  // const category = req.params.category;
  // const items = req.user.items;
  // const ItemsAndPreferences = makeItemsAndPreferences(items, pref, category);
  // try {
  //   const message = `Consider yourself a machine-learning model that returns recipes based on items I will give you.
  //   the recipe's ingredients should only contain the items given but you can add spices.
  //   give small instructions for example: "Boil the water" or "Cut the onion into cubes".
  //   I might also give you dietary preferences
  //   You should return only a JSON object with this format: [{"id": id(from 0 and add 1 for each item), "title": recipe name, "description":description, "calories": how many calories, "time": how much time (45m) (don't give me in hours), "instructions":["instruction1", "instruction2"...](make sure to add each instruction by itself), "ingredients": ["ingredient1", "ingredient2" ...]}]
  //   Don't add anything else to the object
  //   ${ItemsAndPreferences}
  //   make sure to close the JSON file at the end
  //   your answer MUST BE 10 RECIPIES
  //   Give me only the JSON object and remove all texts before and after it.`;

  //   const recipes = await chatCompletion(message);

  //   const recipesWithImages = await addImages(recipes);

  //   res.send({
  //     recipes: recipesWithImages,
  //   });
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
};

const makeDietPlan = async (req, res) => {
  const user = req.user;

  const DietQuestions = JSON.stringify(user.DietQuestions);
  const meals = ["breakfast", "lunch", "dinner", "snack"];
  let dietPlans = {};
  const maxRetries = 3;

  for (let retry = 0; retry < maxRetries; retry++) {
    try {
      for (const meal of meals) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const message = makeMessage(meal, DietQuestions);
        const recipes = await chatCompletion(message);
        const recipesWithImages = await addImages(recipes);
        dietPlans[meal] = JSON.parse(JSON.stringify(recipesWithImages));
      }

      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { DietPlan: dietPlans },
        { new: true }
      );

      res.status(200).json({ updatedUser });
      break;
    } catch (error) {
      console.error(error);
      if (retry < maxRetries - 1) {
        console.log(`Retrying (${retry + 1}/${maxRetries})...`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } else {
        res
          .status(500)
          .json({ error: `Max retries reached: ${error.message}` });
      }
    }
  }
};

module.exports = {
  getRecipes,
  makeDietPlan,
};

const makeMessage = (meal, DietQuestions) => {
  return `
  Consider yourself a dietitian that gives a diet plan after having questions and their answers
  I will give you the answers to the questions and you will return a JSON object with the meals for ${meal}
  your answer MUST BE 10 RECIPIES
  You should return only a JSON object with this format: [{"id": id(from 0 and add 1 for each item), "title": recipe name, "description":description, "calories": how many calories, "time": how much time (45m) (don't give me in hours), "instructions":["instruction1", "instruction2"...](make sure to add each instruction by itself), "ingredients": ["ingredient1", "ingredient2" ...]},{...}]
  Give me only the JSON object and remove all texts before and after it.
  DON'T MAKE ERRORS IN THE JSON FILE CLOSE IT AT THE END
  the questions and their answers are: ${DietQuestions}
  `;
};

const chatCompletion = async (message) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "gpt-3.5-turbo-1106",
      max_tokens: 3700,
    });
    return JSON.parse(chatCompletion.choices[0].message.content);
  } catch (e) {
    console.log(e);
  }
};

const addImages = async (recipes) => {
  const recipesWithImages = JSON.parse(JSON.stringify(recipes));
  const fetchImagePromises = recipesWithImages.map(async (recipe, index) => {
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
      recipe.imageUrl = thumbnailUrl;
    } catch (e) {
      recipe.imageUrl = `${process.env.SERVER_LINK}/default-item.png`;
    }
  });

  await Promise.all(fetchImagePromises);

  return recipesWithImages;
};

const makeItemsAndPreferences = (userItems, pref, category) => {
  if (category === "All") {
    category = null;
  }
  let items = "items:";
  if (userItems.length !== 0) {
    userItems.forEach((item) => {
      items = items + item.name + ", ";
    });
  }
  let DietairyPreferences = "DietaryPreferences: " + category + ", ";
  if (pref !== undefined) {
    const arr = Object.entries(pref._doc);

    arr.forEach((element) => {
      if (element[0] !== "_id") {
        DietairyPreferences += element[0] + ":" + element[1] + ", ";
      }
    });
  }
  return items + " " + DietairyPreferences;
};
