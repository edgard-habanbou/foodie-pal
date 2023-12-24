const User = require("../models/user.model");
const Role = require("../models/userRole.model");

const addAllergies = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const allergies = req.body.allergies;
    allergies.forEach((allergy) => {
      user.allergies.push(allergy);
    });
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCookingPreferences = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const cookingPreferences = req.body.cookingPreferences;
    user.cookingPreferences.push(cookingPreferences);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addDietairyPreferences = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const dietairyPreferences = req.body.dietairyPreferences;
    user.DietairyPreferences.push(dietairyPreferences);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addDietPlanUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const dietPlanUserInfo = req.body.dietPlanUserInfo;
    user.DietPlanUserInfo.push(dietPlanUserInfo);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addEatingHabbits = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const eatingHabbits = req.body.eatingHabbits;
    user.eatingHabbits.push(eatingHabbits);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addItems = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const items = req.body.items;
    user.items.push(items);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMedicalConditions = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const medicalConditions = req.body.medicalConditions;
    user.medicalConditions.push(medicalConditions);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addNutritionGoals = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const nutritionGoals = req.body.nutritionGoals;
    user.NutritionGoals.push(nutritionGoals);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMedications = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const medications = req.body.medications;
    user.medications.push(medications);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

model.exports = {
  addAllergies,
  addCookingPreferences,
  addDietairyPreferences,
  addDietPlanUserInfo,
  addEatingHabbits,
  addItems,
  addMedicalConditions,
  addNutritionGoals,
  addMedications,
};
