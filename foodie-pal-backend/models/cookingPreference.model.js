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

const CookingPreference = mongoose.model(
  "CookingPreference",
  cookingPreferencesSchema
);

module.exports = CookingPreference;
