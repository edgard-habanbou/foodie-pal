const axios = require("axios");

const getImageURL = async (req, res) => {
  try {
    const { image } = req.files;

    if (!image) return res.sendStatus(400);

    const lastIndex = image.name.lastIndexOf(".");
    const extention = image.name.slice(lastIndex + 1);
    const imageName = Date.now() + "." + extention;

    if (extention !== "png" && extention !== "jpg" && extention !== "jpeg") {
      return res.status(400).send({ message: "invalid image format" });
    }

    const { dirname } = require("path");
    const appDir = dirname(require.main.filename);
    const image_dir = appDir + "/public/items/" + imageName;
    image.mv(image_dir);
    const items = await getConcepts(
      `${process.env.SERVER_LINK}/items/${imageName}`
    );
    res.status(200).json({ items: items, image: imageName });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getImageURL,
};

const getConcepts = async (url) => {
  const apiUrl =
    "https://api.clarifai.com/v2/users/clarifai/apps/main/models/food-item-recognition/versions/1d5fd481e0cf4826aa72ec3ff049e044/outputs";
  const apiKey = process.env.CLAIRIFY_API_KEY;

  const requestData = {
    inputs: [
      {
        data: {
          image: {
            url: url,
          },
        },
      },
    ],
  };

  const headers = {
    Authorization: `Key ${apiKey}`,
    "Content-Type": "application/json",
  };

  const items = await axios.post(apiUrl, requestData, { headers });
  return items.data.outputs[0].data.concepts;
};
