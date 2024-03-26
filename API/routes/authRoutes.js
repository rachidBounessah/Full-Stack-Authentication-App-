const express = require("express");
const router = express.Router();
const authContoroller = require("../controllers/authContoroller");
router.route("/register").post(authContoroller.register);
router.route("/login").post(authContoroller.login);
router.route("/refresh").get(authContoroller.refresh);

module.exports = router;
