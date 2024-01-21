const mongoose = require("mongoose");

const RecipesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
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
    imageUrl: {
      type: String,
      required: true,
    },
    instructions: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", RecipesSchema);

module.exports = Recipe;
