const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/authModel");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7h",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.test = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "test for authentications",
  });
};
