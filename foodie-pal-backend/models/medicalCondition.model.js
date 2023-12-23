const mongoose = require("mongoose");

const medicalConditionSchema = new mongoose.Schema({
  conditionName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const MedicalCondition = mongoose.model(
  "MedicalCondition",
  medicalConditionSchema
);

module.exports = MedicalCondition;
