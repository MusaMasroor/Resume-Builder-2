const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = process.env.SECRET_KEY;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  cPassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      email: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
});

// To generate hashed password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cPassword = await bcrypt.hash(this.cPassword, 12);
  }
  next();
});

// To generate authentication token
userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, secretKey);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token; // Make sure to return the generated token
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error so that it can be caught by the calling function
  }
};

// to add new meesage to the DB
userSchema.methods.addMessage = async function (email, subject, message) {
  try {
    this.messages = this.messages.concat({
      email,
      subject,
      message,
    });
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
};
const User = mongoose.model("USER", userSchema);

module.exports = User;
