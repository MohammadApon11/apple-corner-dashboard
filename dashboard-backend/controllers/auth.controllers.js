const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");
const generateTokenAndSetCookie = require("../utils/generateToken.js");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { fullName, userEmail, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await User.findOne({ userEmail });

    if (user) {
      return res.status(400).json({ error: "userEmail already in exists" });
    }

    // has password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?userEmail=${userEmail}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?userEmail=${userEmail}`;

    const newUser = await User({
      fullName,
      userEmail,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser?._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userEmail: newUser.userEmail,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invaild user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { userEmail, password } = req.body;
    const user = await User.findOne({ userEmail });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid userEmail or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15d", // Set expiration time for the token
    });

    // Set the token as a cookie or send it in the response body
    res.cookie("jwt", token, { httpOnly: true });
    // Or send it in the response body
    res.status(201).json({
      token, // Include the token in the response body
      _id: user._id,
      fullName: user.fullName,
      userEmail: user.userEmail,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const logout = (req, res) => {
  try {
    res.cookie("jwt", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signup, login, logout };
