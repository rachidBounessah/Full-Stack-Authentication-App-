require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 9000;
const path = require("path");
connectDB();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "VIEWS", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 not found" });
  } else {
    res.type("txt").send("404 not found");
  }
});

mongoose.connection.once("open", () => {
  console.log("connect to mongoDb");
  app.listen(PORT, () => {
    console.log("server running on port " + PORT);
  });
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
