const mongoose = require("mongoose");

const nutritionGoalSchema = new mongoose.Schema({
  primaryGoal: {
    type: String,
    required: true,
  },
  nutrientGoal: {
    type: String,
    required: true,
  },
});

const NutritionGoal = mongoose.model("NutritionGoal", nutritionGoalSchema);

module.exports = NutritionGoal;
