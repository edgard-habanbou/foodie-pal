const express = require("express");
const { connectToMongoDB } = require("./configs/connection");
const http = require("http");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
app.use(fileUpload());
require("dotenv").config();

app.use(express.static("public"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// auth route
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const { authMiddleware } = require("./middlewares/auth.middleware");

//profile routes
const profileRoutes = require("./routes/profile.routes");
app.use("/profile", authMiddleware, profileRoutes);

//sub document routes
const subDocument = require("./routes/SubDocument.routes");
app.use("/subdocument", authMiddleware, subDocument);

//byteScale routes
const clarifai = require("./routes/clarifai.routes");
app.use("/clarifai", authMiddleware, clarifai);

//openAi routes
const openAi = require("./routes/openai.routes");
app.use("/openai", authMiddleware, openAi);

//stats routes
const stats = require("./routes/stats.routes");
app.use("/stats", authMiddleware, stats);

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log("Server listening on PORT: ", process.env.PORT);
  connectToMongoDB();
});

module.exports = server;
