const express = require("express");

const {
  addEditSubDocument,
  deleteSubDocument,
} = require("../controllers/userSubDocument.controller");

const router = express.Router();

router.post("/", addEditSubDocument);
router.post("/delete", deleteSubDocument);
// router.delete("/", deleteSubDocument);

module.exports = router;
