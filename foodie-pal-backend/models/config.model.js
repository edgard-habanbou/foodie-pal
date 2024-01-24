const mongoose = require("mongoose");

const ConfigSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

const Config = mongoose.model("Config", ConfigSchema);

module.exports = Config;
