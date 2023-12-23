const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
import EatingHabbits from "./eatingHabbits.model";
import Item from "./items.model.js";
import MedicalConditions from "./medicalConditions.model";
import Allergy from "./allergies.model";
import CookingPreferences from "./cookingPreferences.model";
import DietPlanUserInfo from "./dietPlanUserInfo.model";
import DietairyPreferences from "./dietairyPreferences.model";
import NutritionGoal from "./nutritionGoal.model";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  userRole: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
    default: "no-profile-picture-icon.png",
  },
  medications: {
    type: [String],
    required: true,
  },
  items: {
    type: [Item.schema],
  },
  eatingHabbits: {
    type: [EatingHabbits.schema],
  },
  medicalConditions: {
    type: [MedicalConditions.schema],
  },
  allergies: {
    type: [Allergy.schema],
  },
  cookingPreferences: {
    type: [CookingPreferences.schema],
  },
  DietPlanUserInfo: {
    type: [DietPlanUserInfo.schema],
  },
  DietairyPreferences: {
    type: [DietairyPreferences.schema],
  },
  NutritionGoals: {
    type: [NutritionGoal.schema],
  },
});

userSchema.pre(
  "save",
  async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
