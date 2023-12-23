const mongoose = require("mongoose");

const dietairyRestrictionsSchema = new mongoose.Schema({
  restrictionName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const DietairyRestrictions = mongoose.model(
  "DietairyRestrictions",
  dietairyRestrictionsSchema
);

module.exports = DietairyRestrictions;
