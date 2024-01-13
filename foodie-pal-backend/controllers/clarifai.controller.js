const axios = require("axios");
const fs = require("fs");
const path = require("path");

const getImageURL = async (req, res) => {
  try {
    const base64Data = req.body.image.replace(/^data:image\/\w+;base64,/, "");
    const dataBuffer = Buffer.from(base64Data, "base64");

    const imageName = `${Date.now()}.png`;

    const { dirname } = require("path");
    const appDir = dirname(require.main.filename);
    const image_dir = appDir + "/public/items/" + imageName;

    fs.writeFileSync(image_dir, dataBuffer);
    const items = await getConcepts(
      `${process.env.SERVER_LINK}/items/${imageName}`
    );
    res.status(200).json({ items });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
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

  axios
    .post(apiUrl, requestData, { headers })
    .then((response) => {
      return response.data.outputs[0].data.concepts;
    })
    .catch((error) => {
      console.error(error);
    });
};
