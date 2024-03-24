require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 9000;

connectDB();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
mongoose.connection.once("open", () => {
  console.log("connect to mongoDb");
  app.listen(PORT, () => {
    console.log("server running on port " + PORT);
  });
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
