const express = require("express");
const {
  login,
  register,
  forgotPassword,
  resetPassword,
  checkToken,
  checkAuthToken,
} = require("../controllers/auth.controllers");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/check-token", checkToken);
router.post("/check", checkAuthToken);

module.exports = router;
