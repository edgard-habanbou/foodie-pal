const mongoose = require("mongoose");
const Allergy = require("./allergy.model");

const DietPlanSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  activityLevel: {
    type: Number,
    required: true,
  },
  allergies: {
    type: [Allergy.schema],
    required: true,
  },
  supportSystem: {
    type: Boolean,
    required: true,
  },
});

const DietPlan = mongoose.model("DietPlan", DietPlanSchema);

module.exports = DietPlan;
