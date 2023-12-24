const mongoose = require("mongoose");

const dietairyPreferencesSchema = new mongoose.Schema({
  restrictions: {
    type: [mongoose.Schema.Types.ObjectId],
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
