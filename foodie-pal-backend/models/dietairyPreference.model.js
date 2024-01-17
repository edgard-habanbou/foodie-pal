const mongoose = require("mongoose");

const dietairyPreferencesSchema = new mongoose.Schema({
  restrictions: {
    type: String,
  },
  allergies: {
    type: String,
  },
  cuisinePreferences: {
    type: String,
  },
  flavorPreferences: {
    type: [String],
  },
});

const DietairyPreference = mongoose.model(
  "DietairyPreference",
  dietairyPreferencesSchema
);

module.exports = DietairyPreference;
