const mongoose = require("mongoose");
const DietairyRestriction = require("./dietairyRestriction.model");

const dietairyPreferencesSchema = new mongoose.Schema({
  restrictions: {
    type: [DietairyRestriction.Schema],
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

const DietairyPreference = mongoose.model(
  "DietairyPreference",
  dietairyPreferencesSchema
);

module.exports = DietairyPreference;
