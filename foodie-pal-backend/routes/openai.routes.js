const express = require("express");

const {
  getRecipes,
  makeDietPlan,
} = require("../controllers/openAi.controller");

const router = express.Router();

router.get("/getrecipes/:category", getRecipes);
router.get("/getrecipes", getRecipes);
router.get("/makedietplan", makeDietPlan);

module.exports = router;
