const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { authenticateToken };
