const mongoose = require("mongoose");

const allergiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Allergy = mongoose.model("Allergy", allergiesSchema);

module.exports = Allergy;
