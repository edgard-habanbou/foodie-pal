const express = require("express");
const { getStats, getUsers } = require("../controllers/stats.controller");
const router = express.Router();

router.post("/getstats", getStats);
router.post("/getusers", getUsers);

module.exports = router;
