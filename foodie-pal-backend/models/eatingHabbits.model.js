const mongoose = require("mongoose");

const eatingHabbitsSchema = new mongoose.Schema({
  eatingHabbitDescription: {
    type: Text,
    required: true,
  },
  takeOutPerWeek: {
    type: Number,
    required: true,
  },
  StressImpact: {
    type: Number,
    required: true,
  },
  snackTime: {
    type: String,
    required: true,
  },
  typeOfSnacks: {
    type: String,
    required: true,
  },
  dailyWaterIntake: {
    type: Number,
    required: true,
  },
  dilyBevarageIntake: {
    type: Number,
    required: true,
  },
  alcoholPerWeek: {
    type: Number,
    required: true,
  },
  issuesWithHydration: {
    type: Boolean,
    required: true,
  },
});

const EatingHabbits = mongoose.model("EatingHabbits", eatingHabbitsSchema);

module.exports = EatingHabbits;
