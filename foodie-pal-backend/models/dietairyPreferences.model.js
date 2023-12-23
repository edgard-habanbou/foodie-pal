const mongoose = require("mongoose");

const dietairyRestrictionsSchema = new mongoose.Schema({
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

const DietairyRestrictions = mongoose.model(
  "DietairyRestrictions",
  dietairyRestrictionsSchema
);

module.exports = DietairyRestrictions;
