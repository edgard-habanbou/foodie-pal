const express = require("express");

const { getImageURL } = require("../controllers/clarifai.controller");

const router = express.Router();

router.post("/upload", getImageURL);

module.exports = router;
