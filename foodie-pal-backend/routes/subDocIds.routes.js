const express = require("express");

const {
  addSubDocumentIds,
  deleteSubDocumentIds,
} = require("../controllers/userSubDocumentIds.controller");

const router = express.Router();

router.post("/", addSubDocumentIds);
router.delete("/", deleteSubDocumentIds);

module.exports = router;
