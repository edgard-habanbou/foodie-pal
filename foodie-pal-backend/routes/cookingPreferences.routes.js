const express = require("express");

const {
  addCookingPreferences,
  editCookingPreferences,
  deleteCookingPreferences,
} = require("../controllers/cookingPreferences.controllers");

const router = express.Router();

router.post("/", addCookingPreferences);
router.put("/", editCookingPreferences);
router.delete("/", deleteCookingPreferences);

module.exports = router;
