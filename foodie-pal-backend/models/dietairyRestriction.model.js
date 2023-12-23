const mongoose = require("mongoose");

const dietairyRestrictionsSchema = new mongoose.Schema({
  restrictionName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const DietairyRestriction = mongoose.model(
  "DietairyRestriction",
  dietairyRestrictionsSchema
);

module.exports = DietairyRestriction;
