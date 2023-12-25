const express = require("express");

const {
  addAllergies,
  editAllergies,
  deleteAllergies,
} = require("../controllers/allergy.controllers");
const router = express.Router();

router.post("/", addAllergies);
router.put("/", editAllergies);
router.delete("/", deleteAllergies);

module.exports = router;
