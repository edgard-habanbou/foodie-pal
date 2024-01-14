const mongoose = require("mongoose");

const RecipesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  calories: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
});

const Recipe = mongoose.model("Recipe", RecipesSchema);

module.exports = Recipe;
