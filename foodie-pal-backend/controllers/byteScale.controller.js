const axios = require("axios");

const getImageURL = async (req, res) => {
  const { image } = req.files;

  const apiUrl =
    "https://api.clarifai.com/v2/users/clarifai/apps/main/models/food-item-recognition/versions/1d5fd481e0cf4826aa72ec3ff049e044/outputs";
  const apiKey = "8454426672df48eaba4fb32d21586aec";

  const requestData = {
    inputs: [
      {
        data: {
          image: {
            url: "https://www.campdenbri.co.uk/images/fruit-veg-seeds-medium.jpg",
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

module.exports = {
  getImageURL,
};
