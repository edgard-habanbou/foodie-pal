const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: "all fields are required" });
    return;
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).send({ message: "Invalid email/password" });
    return;
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    res.status(400).send({ message: "Invalid email/password" });
    return;
  }
  const { password: hashedPassword, _id, ...userDetails } = user.toJSON();

  // generate JWT token
  const token = jwt.sign(
    {
      ...userDetails,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2 days" }
  );

  res.status(200).send({
    user: userDetails,
    token,
  });
};

const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !fname || !lname) {
    res.status(400).send({ message: "all fields are required" });
    return;
  }

  try {
    const user = new User({
      email,
      password,
      firstName,
      lastName,
      gender,
    });

    await user.save();

    res.status(200).send({ user });
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

module.exports = {
  login,
  register,
};
