const User = require("../models/user.model");
const { ObjectId } = require("mongodb");

const getStats = async (req, res) => {
  try {
    if (!req.user.userRole.equals(new ObjectId(process.env.ADMIN_ID))) {
      res.status(403).send({ message: "Not Authorized" });
      return;
    }
    const { userCount, userCreationTimes } =
      await getuserCountAndCreationTime();
    const { dietPlanCount, dietPlanCreationTimes } = await getDietPlanCount();
    const { male, female } = await getGenderCounts();
    const totalItemsCount = await getTotalItemsCount();
    res.status(200).send({
      role: "admin",
      userCount,
      male,
      female,
      userCreationTimes,
      dietPlanCount,
      dietPlanCreationTimes,
      totalItemsCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const getUsers = async (req, res) => {
  if (!req.user?.userRole.equals(new ObjectId(process.env.ADMIN_ID))) {
    res.status(403).send({ message: "Not Authorized" });
    return;
  }
  try {
    const users = await User.find();
    const filteredUsers = users.filter(
      (user) => !user._id.equals(req.user._id)
    );

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getStats,
  getUsers,
};
const getuserCountAndCreationTime = async () => {
  const startDate = new Date(0);
  const users = await User.find({
    createdAt: { $gte: startDate },
  }).select("createdAt");
  const userCount = users.length;
  const userCreationTimes = users.map((user) => user.createdAt);
  return { userCount, userCreationTimes };
};

const getDietPlanCount = async () => {
  try {
    const usersWithDietPlan = await User.find({
      DietPlan: { $exists: true, $ne: null },
    }).select("createdAt DietPlan firstName lastName");
    const dietPlanCount = usersWithDietPlan.length;
    const dietPlanCreationTimes = usersWithDietPlan.map(
      (user) => user.DietPlan.createdAt
    );

    return { dietPlanCount, dietPlanCreationTimes };
  } catch (error) {
    console.error("Error in getDietPlanCount:", error);
  }
};
const getTotalItemsCount = async () => {
  try {
    const users = await User.find();
    let sum = 0;
    users.map((user) => {
      sum += user.items.length;
    });
    return sum;
  } catch (error) {
    console.error("Error retrieving total items count:", error);
  }
};
const getGenderCounts = async () => {
  try {
    const maleCount = await User.countDocuments({ gender: false });
    const femaleCount = await User.countDocuments({ gender: true });

    return {
      male: maleCount,
      female: femaleCount,
    };
  } catch (error) {
    console.error("Error in getGenderCounts:", error);
  }
};
