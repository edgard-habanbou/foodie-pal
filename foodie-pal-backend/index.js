const express = require("express");
const { connectToMongoDB } = require("./configs/connection");
const https = require("https"); // Add the 'https' module
const fs = require("fs"); // Add the 'fs' module for file system operations
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

//sub document ids routes
const subDocumentId = require("./routes/subDocIds.routes");
app.use("/subdocid", authMiddleware, subDocumentId);

//byteScale routes
const clarifai = require("./routes/clarifai.routes");
app.use("/clarifai", authMiddleware, clarifai);

// Specify your SSL certificate and private key
const credentials = {
  key: fs.readFileSync("./ssl/server.key"),
  cert: fs.readFileSync("./ssl/server.crt"),
};

// Use the 'https' module to create an HTTPS server
const server = https.createServer(credentials, app);

server.listen(process.env.PORT, () => {
  console.log("Server listening on PORT: ", process.env.PORT);
  connectToMongoDB();
});
