const express = require("express");

const { getRecipes } = require("../controllers/openAi.controller");

const router = express.Router();

router.get("/getrecipes/:category", getRecipes);

module.exports = router;
