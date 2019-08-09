const User = require("../../database/models/User");
const keys = require("../../config/keys");

const jwt = require("jsonwebtoken");

module.exports = async function(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "No token" });
  }

  try {
    const decoded = jwt.verify(token, keys.jwtSecret);

    if (decoded.exp < Date.now() / 1000) {
      return res.status(401).json({ msg: "Expired token" });
    }

    const user = await User.findOne({ _id: decoded._id }).select("-password");

    if (user) {
      req.user = user._doc;
      next();
    } else {
      throw Error();
    }
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
