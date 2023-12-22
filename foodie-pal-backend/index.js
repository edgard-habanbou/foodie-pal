const express = require("express");
const { connectToMongoDB } = require("./configs/connection");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.static("public"));
app.use(cors({ origin: "http://127.0.0.1:3000" }));

app.listen(process.env.PORT, () => {
  console.log("Server listining on PORT: ", process.env.PORT);
  connectToMongoDB();
});
