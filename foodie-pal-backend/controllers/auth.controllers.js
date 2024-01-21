const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { sendMail } = require("./mail.controllers");
const { ObjectId } = require("mongodb");

const login = async (req, res) => {
  const type = req.params.type;
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: "all fields are required" });
    return;
  } else if (!validator.isEmail(email)) {
    res.status(400).send({ message: "Invalid email" });
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
  if (type === "admin") {
    console.log(
      userDetails.userRole.equals(new ObjectId(process.env.ADMIN_ID))
    );
  }
  // generate JWT token
  const token = jwt.sign(
    {
      _id: _id,
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
  const { email, password, firstName, lastName, gender } = req.body;
  if (!email || !password || !firstName || !lastName || gender === undefined) {
    res.status(400).send({ message: "all fields are required" });
    return;
  } else if (!validator.isEmail(email)) {
    res.status(400).send({ message: "Invalid email" });
    return;
  } else if (password.length < 8) {
    res
      .status(400)
      .send({ message: "password must be at least 8 characters long" });
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

    res.status(200).send({ message: "user created successfully" });
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).send({ message: "email is required" });
    return;
  } else if (!validator.isEmail(email)) {
    res.status(400).send({ message: "Invalid email" });
    return;
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).send({ message: "Invalid email" });
    return;
  } else {
    const code = generateRandomString();
    user.resetPasswordCode = code;
    user.resetPasswordCodeUsed = false;
    await user.save();

    sendMail(
      email,
      "Reset Password",
      "Go to this link to reset your password " +
        `${process.env.CLIENT_LINK}/reset-password/${code}`,
      res
    );
  }
};

const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  if (!token || !password) {
    res.status(400).send({ message: "token and password are required" });
    return;
  } else if (password.length < 8) {
    res
      .status(400)
      .send({ message: "password must be at least 8 characters long" });
    return;
  }

  const user = await User.findOne({ resetPasswordCode: token });
  if (!user) {
    res.status(400).send({ message: "Invalid token" });
    return;
  } else if (user.resetPasswordCodeUsed) {
    res.status(400).send({ message: "Token already used" });
    return;
  }

  user.password = password;
  user.resetPasswordCodeUsed = true;
  await user.save();

  res.status(200).send({ message: "password reset successfully" });
};

const checkToken = async (req, res) => {
  const { token } = req.body;
  if (!token) {
    res.status(400).send({ message: "token is required" });
    return;
  }
  const user = await User.findOne({ resetPasswordCode: token });
  if (!user) {
    res.status(400).send({ message: "Invalid token" });
    return;
  } else if (user.resetPasswordCodeUsed) {
    res.status(400).send({ message: "Token already used" });
    return;
  } else {
    res.status(200).send({ message: "token is valid" });
  }
};

const checkAuthToken = async (req, res) => {
  const { token } = req.body;
  if (!token) {
    res.status(400).send({ message: "token is required" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id });
    res.status(200).send({ user: user });
  } catch (e) {
    res.status(400).send({ message: "Invalid token" });
  }
};

const generateRandomString = () => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
};

module.exports = {
  login,
  register,
  forgotPassword,
  resetPassword,
  checkToken,
  checkAuthToken,
};
