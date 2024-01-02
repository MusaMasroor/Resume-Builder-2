const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();
const authenticate = require("../middleware/authenticate");

const User = require("../models/userSchema");

// Sign up route
router.post("/register", async (req, res) => {
  const { name, email, phoneNumber, password, cPassword } = req.body;
  if (!name && !email && !phoneNumber && !password && !cPassword) {
    return res.status(422).json({ error: "Fill all the input field" });
  }
  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(409).json({ message: "User already exists" });
    } else if (password != cPassword) {
      res.status(400).json({ message: "Password confirmation does not match" });
    } else {
      const user = new User({
        name,
        email,
        phoneNumber,
        password,
        cPassword,
      });
      await user.save();

      res.status(201).json({ message: "Account created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Login Route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({ message: "Fill the input field" });
    }
    const loginInfo = await User.findOne({ email: email });

    if (loginInfo) {
      const verifyPassword = await bcrypt.compare(password, loginInfo.password);

      if (!verifyPassword) {
        res.json({ message: "Invalid Credentials" });
      } else {
        const token = await loginInfo.generateAuthToken();

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });

        res.status(200).json({ message: "User Login Successfully" });
      }
    } else {
      res.status(400).json({ message: "Create an account to login !" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Template
router.get("/template", authenticate, (req, res) => {
  res.json({ rootUser: req.rootUser });
});

module.exports = router;

// Contact Route
router.post("/contact", async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    if (!email && !subject && !message) {
      console.log("Fill all the input fields");
      return res.json({ error: "Fill all the input fields" });
    }

    const userContact = await User.findOne({ email: email });
    if (userContact) {
      const userMessage = await userContact.addMessage(email, subject, message);
      await userContact.save();
      res.status(201).json({ message: "message send successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Logout route
// router.get("/logout", (req, res) => {
//   res.clearCookie("jwtoken", { path: "/" });
//   res.status(200).send("user logged out");
// });
