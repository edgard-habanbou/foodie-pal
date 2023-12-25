const User = require("../models/user.model");

const addCookingPreferences = async (req, res) => {
  try {
    const cookingPreferences = req.body.cookingPreferences;
    const user = await User.findByIdAndUpdate(req.user._id, {
      cookingPreferences,
    });
    await user.save();

    const updatedUser = await User.findById(req.user._id).select(
      "-password -_id -__v"
    );
    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editCookingPreferences = async (req, res) => {
  try {
    const cookingPreferences = req.body.cookingPreferences;
    await User.findByIdAndUpdate(req.user._id, { cookingPreferences });
    const user = await User.findById(req.user._id).select(
      "-password -_id -__v"
    );
    res.status(200).json({ user });
  } catch (error) {
    res.status(500);
  }
};

const deleteCookingPreferences = async (req, res) => {
  try {
    const cookingPreferencesIdToDelete = req.body.cookingPreferences;
    const userId = req.user._id;

    const deleted = await Promise.all(
      cookingPreferencesIdToDelete.map(async (cookingPreferenceId) => {
        return await User.findByIdAndUpdate(
          userId,
          { $pull: { cookingPreferences: cookingPreferenceId } },
          { new: true }
        );
      })
    );

    if (!deleted) {
      res.status(500).json({ error: "Something went wrong" });
    }

    const user = await User.findById(userId).select("-password -_id -__v");

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCookingPreferences,
  editCookingPreferences,
  deleteCookingPreferences,
};
