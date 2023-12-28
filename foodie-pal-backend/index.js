const express = require("express");
const { connectToMongoDB } = require("./configs/connection");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bcrypt = require("bcrypt");
app.use(fileUpload());
require("dotenv").config();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

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

app.listen(process.env.PORT, () => {
  console.log("Server listining on PORT: ", process.env.PORT);
  connectToMongoDB();
});
