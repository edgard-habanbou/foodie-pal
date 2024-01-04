const axios = require("axios");

const getImageURL = async (req, res) => {
  const { image } = req.files;
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
      res.status(200).json(response.data.outputs[0].data.concepts);
    })
    .catch((error) => {
      console.error(error);
    });
};
