const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const foundUser = await User.findOne({ email }).exec();
  if (foundUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    first_name,
    last_name,
    email,
    password: hashedPassword,
  });
  const accessTokent = jwt.sign(
    {
      UserInfo: {
        id: user._id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
  const refreshToken = jwt.sign(
    {
      UserInfo: {
        id: user._id,
      },
    },
    process.env.REFRECH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("jwt", refreshToken, {
    httpOnly: true, //accessible only by hhtp
    secure: true, //https
    sameSite: "None", //cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    accessTokent,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const foundUser = await User.findOne({ email }).exec();
  if (!foundUser) {
    return res.status(400).json({
      message: "User does not  exists",
    });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  const accessTokent = jwt.sign(
    {
      UserInfo: {
        id: foundUser._id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
  const refreshToken = jwt.sign(
    {
      UserInfo: {
        id: foundUser._id,
      },
    },
    process.env.REFRECH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("jwt", refreshToken, {
    httpOnly: true, //accessible only by hhtp
    secure: true, //https
    sameSite: "None", //cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    accessTokent,
    email: foundUser.email,
  });
};

module.exports = {
  register,
  login,
};
