const User = require("../models/user.model");
const mongoose = require("mongoose");

const getUserKey = async (key, value) => {
  const subDocumentIdExists = await mongoose.model(key).findById(value);

  if (subDocumentIdExists !== null) {
    let userKey = "";
    if (key === "Allergy") {
      userKey = "allergies";
    } else if (key === "Item") {
      userKey = "items";
    }
    return userKey;
  } else {
    return null;
  }
};
const addSubDocumentIds = async (req, res) => {
  try {
    const subDocumentIds = req.body.subDocumentIds;

    let allergyExistsFlag = true;

    for (const [key, value] of Object.entries(subDocumentIds)) {
      try {
        const userKey = await getUserKey(key, value);
        if (userKey === null) {
          allergyExistsFlag = false;
          break;
        }
        await User.findByIdAndUpdate(req.user._id, {
          [`${userKey}`]: value,
        });
      } catch (error) {
        allergyExistsFlag = false;
      }
    }
    if (allergyExistsFlag) {
      const updatedUser = await User.findById(req.user._id).select(
        "-password -_id -__v"
      );
      res.status(200).json({ updatedUser });
    } else {
      res.status(500).json({ error: "One or more allergies do not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSubDocumentIds = async (req, res) => {
  try {
    const subDocumentIdsToDelete = req.body.subDocumentIds;

    for (const [key, value] of Object.entries(subDocumentIdsToDelete)) {
      const userKey = await getUserKey(key, value);
      if (userKey === null) {
        res.status(500).json({ error: "Allergies not deleted" });
      }
      return await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { [`${userKey}`]: value } },
        { new: true }
      );
    }

    if (!deleted) {
      res.status(500).json({ error: "Allergies not deleted" });
    } else {
      const user = await User.findById(req.user._id).select(
        "-password -_id -__v"
      );
      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(500);
  }
};

module.exports = {
  addSubDocumentIds,
  deleteSubDocumentIds,
};
