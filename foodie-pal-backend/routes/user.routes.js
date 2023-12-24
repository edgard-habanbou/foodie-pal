const express = require("express");
const {
  addAllergies,
  addCookingPreferences,
  addDietairyPreferences,
  addDietPlanUserInfo,
  addEatingHabbits,
  addItems,
  addMedicalConditions,
  addNutritionGoals,
  addMedications,
} = require("../controllers/user.controller");
const router = express.Router();

router.post("/allergies", addAllergies);
router.post("/cookingPreferences", addCookingPreferences);
router.post("/dietairyPreferences", addDietairyPreferences);
router.post("/dietPlanUserInfo", addDietPlanUserInfo);
router.post("/eatingHabbits", addEatingHabbits);
router.post("/items", addItems);
router.post("/medicalConditions", addMedicalConditions);
router.post("/nutritionGoals", addNutritionGoals);
router.post("/medications", addMedications);

module.exports = router;
