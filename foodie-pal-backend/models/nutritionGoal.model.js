const mongoose = require("mongoose");

const dietairyRestrictionsSchema = new mongoose.Schema({
  primaryGoal: {
    type: String,
    required: true,
  },
  nutrientGoal: {
    type: String,
    required: true,
  },
});

const DietairyRestrictions = mongoose.model(
  "DietairyRestrictions",
  dietairyRestrictionsSchema
);

module.exports = DietairyRestrictions;
