require("dotenv").config();
console.log("the valus is", process.env.NODE_ENV);

const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
