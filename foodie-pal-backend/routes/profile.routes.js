const express = require("express");
const {
  upload_image,
  get_user,
} = require("../controllers/profile.controllers");
const router = express.Router();

router.post("/upload", upload_image);
router.get("/user", get_user);

module.exports = router;
