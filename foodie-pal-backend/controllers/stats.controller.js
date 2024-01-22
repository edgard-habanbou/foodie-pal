const User = require("../models/user.model");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const getStats = async (req, res) => {
  if (req.user.userRole.equals(new ObjectId(process.env.ADMIN_ID))) {
    res.status(200).send({ role: "admin" });
    return;
  } else {
    res.status(400).send({ message: "Not Authorized" });
    return;
  }
};

module.exports = {
  getStats,
};
