const express = require("express");
const router = express.Router();
const authContoroller = require("../controllers/authContoroller");
router.route("/register").post(authContoroller.register);

module.exports = router;
