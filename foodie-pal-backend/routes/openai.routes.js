const express = require("express");

const {
  getRecipes,
  makeDietPlan,
  sendQuestion,
} = require("../controllers/openAi.controller");

const router = express.Router();

router.get("/getrecipes/:category", getRecipes);
router.get("/getrecipes", getRecipes);
router.get("/makedietplan", makeDietPlan);
router.post("/sendquestion", sendQuestion);

module.exports = router;
