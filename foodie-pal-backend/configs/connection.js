const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const connectToMongoDB = () => {
  mogoose.connect(process.env.MONGODB_URL);
  const connection = mongoose.connection;
  connection.on("error", (error) => {
    console.log("Error connection to MongoDB: ", error);
  });

  connection.once("open", () => {
    console.log("Connected to MongoDB...");
  });
};

module.exports = { connectToMongoDB };
