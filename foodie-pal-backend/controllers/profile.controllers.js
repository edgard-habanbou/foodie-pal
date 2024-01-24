const User = require("../models/user.model");

const upload_image = async (req, res) => {
  const { image } = req.files;
  const userId = req.user._id;

  if (!image) return res.sendStatus(400);

  const lastIndex = image.name.lastIndexOf(".");
  const extention = image.name.slice(lastIndex + 1);
  const imageName = Date.now() + "." + extention;

  if (extention !== "png" && extention !== "jpg" && extention !== "jpeg") {
    return res.status(400).send({ message: "invalid image format" });
  }

  const { dirname } = require("path");
  const appDir = dirname(require.main.filename);
  const image_dir = appDir + "/public/images/" + imageName;
  image.mv(image_dir);

  await User.findByIdAndUpdate(userId, {
    imageUrl: imageName,
  });

  res.status(200).send({ message: "Image uploaded", image: imageName });
};

const delete_user = async (req, res) => {
  let userId;
  if (req.user.userRole.equals(new ObjectId(process.env.ADMIN_ID))) {
    userId = req.body.userIdToDelete;
  } else {
    userId = req.user._id;
  }
  await User.findByIdAndDelete(userId);
  res.send({ message: "User deleted" });
};

const get_user = async (req, res) => {
  res.send(req.user);
};

module.exports = {
  upload_image,
  get_user,
  delete_user,
};
