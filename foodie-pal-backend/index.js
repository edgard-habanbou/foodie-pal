const express = require("express");
const { connectToMongoDB } = require("./configs/connection");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
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

//allergy routes
const allergyRoutes = require("./routes/allergy.routes");
app.use("/allergy", authMiddleware, allergyRoutes);

//sub document routes
const subDocument = require("./routes/SubDocument.routes");
app.use("/subdocument", authMiddleware, subDocument);

app.listen(process.env.PORT, () => {
  console.log("Server listining on PORT: ", process.env.PORT);
  connectToMongoDB();
});
