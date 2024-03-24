const allowedOrigins = require("./config/allowedOrigins");
const corsOptions = {
  origin: (origin, calback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      calback(null, true);
    } else {
      calback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
