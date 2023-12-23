const mongoose = require("mongoose");

const cookingPreferencesSchema = new mongoose.Schema({
  cookingConfortability: {
    type: Number,
    required: true,
  },
  cuisinePrefferedType: {
    type: String,
    required: true,
  },
});

const CookingPreferences = mongoose.model(
  "CookingPreferences",
  cookingPreferencesSchema
);

module.exports = CookingPreferences;
