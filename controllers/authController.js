const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, company, phoneNumber, location } = req.body;

    if (!name || !email || !password || !confirmPassword || !phoneNumber || !location) {
      return res.status(400).send({ message: "All required fields must be provided" });
    }

    if (password !== confirmPassword) {
      return res.status(400).send({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
       confirmPassword,
      company,
      phoneNumber,
      location
    });

    const token = generateToken(user._id);

    res.status(201).send({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        company: user.company,
        phoneNumber: user.phoneNumber,
        location: user.location
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.send({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        company: user.company,
        phoneNumber: user.phoneNumber,
        location: user.location
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// GET PROFILE (Protected)
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // password exclude

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      message: 'Profile fetched successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
