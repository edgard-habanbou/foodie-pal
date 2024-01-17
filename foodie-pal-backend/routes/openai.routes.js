const express = require("express");

const { getRecipes } = require("../controllers/openAi.controller");

const router = express.Router();

router.post("/getrecipes", getRecipes);

module.exports = router;
