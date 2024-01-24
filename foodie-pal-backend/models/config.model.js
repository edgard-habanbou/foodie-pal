const mongoose = require("mongoose");

const ConfigSchema = new mongoose.Schema(
  {
    MONGODB_URL: {
      type: String,
      required: true,
    },
    JWT_SECRET: {
      type: String,
      required: true,
    },
    SERVER_LINK: {
      type: String,
      required: true,
    },
    CLIENT_LINK: {
      type: String,
      required: true,
    },
    EMAIL_ADDRESS: {
      type: String,
      required: true,
    },
    EMAIL_PASSWORD: {
      type: String,
      required: true,
    },
    CLAIRIFY_API_KEY: {
      type: String,
      required: true,
    },
    OPENAI_API_KEY: {
      type: String,
      required: true,
    },
    BING_API_KEY: {
      type: String,
      required: true,
    },
    ADMIN_ID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Config = mongoose.model("Config", ConfigSchema);

module.exports = Config;
