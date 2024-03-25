const express = require("express");
const router = express.Router();
const authContoroller = require("../controllers/authContoroller");
router.route("/register", authContoroller.register);

module.exports = router;
