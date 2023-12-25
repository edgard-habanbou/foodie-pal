const Allergy = require("../models/allergy.model");
const User = require("../models/user.model");

const addAllergies = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const allergies = req.body.allergies;

    let allergyExistsFlag = true;

    for (const allergy of allergies) {
      const allergyExists = await Allergy.findById(allergy);

      if (allergyExists && user.allergies.indexOf(allergy) === -1) {
        user.allergies.push(allergy);
      } else {
        allergyExistsFlag = false;
      }
    }

    if (allergyExistsFlag) {
      await user.save();
      res.status(200).json({ user });
    } else {
      res.status(500).json({ error: "One or more allergies do not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editAllergies = async (req, res) => {
  try {
    const allergies = req.body.allergies;
    await User.findByIdAndUpdate(req.user._id, { allergies });
    const user = await User.findById(req.user._id).select(
      "-password -_id -__v"
    );
    res.status(200).json({ user });
  } catch (error) {
    res.status(500);
  }
};

const deleteAllergies = async (req, res) => {
  try {
    const allergiesIdToDelete = req.body.allergies;
    const userId = req.user._id;

    const deleted = await Promise.all(
      allergiesIdToDelete.map(async (allergyId) => {
        return await User.findByIdAndUpdate(
          userId,
          { $pull: { allergies: allergyId } },
          { new: true }
        );
      })
    );

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
  addAllergies,
  editAllergies,
  deleteAllergies,
};
