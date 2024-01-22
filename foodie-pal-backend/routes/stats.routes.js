const express = require("express");
const { getStats } = require("../controllers/stats.controller");
const router = express.Router();

router.post("/getstats", getStats);
module.exports = router;
