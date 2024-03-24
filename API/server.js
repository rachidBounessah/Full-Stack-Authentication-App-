require("dotenv").config();
console.log("the valus is", process.env.NODE_ENV);
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 9000;

connectDB();

mongoose.connection.once("open", () => {
  console.log("connect to mongoDb");
  app.listen(PORT, () => {
    console.log("server running on port " + PORT);
  });
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
