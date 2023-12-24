const express = require("express");
const { connectToMongoDB } = require("./configs/connection");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
app.use(fileUpload());
require("dotenv").config();

app.use(express.static("public"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// auth route
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const { authMiddleware } = require("./middlewares/auth.middleware");

//profile routes
const profileRoutes = require("./routes/profile.routes");
app.use("/profile", authMiddleware, profileRoutes);

//user routes
const userRoutes = require("./routes/user.routes");
app.use("/user", authMiddleware, userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server listining on PORT: ", process.env.PORT);
  connectToMongoDB();
});
