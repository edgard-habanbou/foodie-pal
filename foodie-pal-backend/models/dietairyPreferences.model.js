const mongoose = require("mongoose");

const dietairyPreferencesSchema = new mongoose.Schema({
  restrictions: {
    type: [DietairyRestrictions.Schema],
    required: true,
  },
  mealsPerDay: {
    type: Number,
    required: true,
  },
  dailySchedule: {
    type: String,
    required: true,
  },
});

const DietairyPreferences = mongoose.model(
  "DietairyPreferences",
  dietairyPreferencesSchema
);

module.exports = DietairyPreferences;
