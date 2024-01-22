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
    res.status(200).send({ role: "admin", userCount, userCreationTimes });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getStats,
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
