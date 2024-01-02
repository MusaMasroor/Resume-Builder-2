const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const secretKey = process.env.SECRET_KEY;
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, secretKey);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log("Root User:", rootUser);
    if (!rootUser) {
      throw new Error("user not found");
    } else res.status(200);
    {
      req.token = token;
      req.rootUser = rootUser;
      req.userID = rootUser._id;
      next();
    }
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ message: "Kindly login to see the template" });
  }
};
module.exports = authenticate;
