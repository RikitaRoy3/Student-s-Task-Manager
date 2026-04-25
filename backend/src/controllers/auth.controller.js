import User from "../models/User.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";
import { ENV } from "../lib/env.js";

import { generateToken } from "../lib/generatetoken.js";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";


import dotenv from "dotenv";
dotenv.config();



/* ===================== SIGNUP ===================== */
export const signup = async (req, res) => {
  const { fullName, email, password, gender } = req.body;

  try {
    if (!fullName || !email || !password || !gender) {
      return res.status(400).json({ message: "Please provide all the required fields" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      gender,
      profilePic: "",
    });

    generateToken(newUser._id, res);

    res.status(201).json({
      user: {
        message: "User registered successfully",
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      },
    });

    try {
      await sendWelcomeEmail(newUser.email, newUser.fullName, ENV.CLIENT_URL);
    } catch (err) {
      console.error("Welcome email failed:", err);
    }
  } catch (error) {
    console.error("Error in signup controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



/* ===================== LOGIN ===================== */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide all the required fields" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    generateToken(user._id, res);

    res.status(200).json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* ===================== LOGOUT ===================== */

export const logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
    secure: ENV.NODE_ENV !== "development",
  });

  res.status(200).json({ message: "Logout successful" });
};

/* ===================== Dashboard ===================== */

export const dashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("pendingTasks")
      .populate("completedTasks");
    res.status(200).json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
        completedTasks: user.completedTasks,
        pendingTasks: user.pendingTasks
      },
    });
  } catch (error) {
    console.error("Error in dashboard controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


/* ===================== Task's List ===================== */

export const taskList = async (req, res) => {
  try {
    // const user = await User.findById(req.user._id);

    const user = await User.findById(req.user._id)
      .populate("pendingTasks")
      .populate("completedTasks");
    res.status(200).json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
        completedTasks: user.completedTasks,
        pendingTasks: user.pendingTasks
      },
    });
  } catch (error) {
    console.error("Error in Task's List controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* ===================== Profile  ===================== */

export const profile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("pendingTasks")
      .populate("completedTasks");

    res.status(200).json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
        gender: user.gender
      },
    });
  } catch (error) {
    console.error("Error in Task's List controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


/* ===================== Avatar  ===================== */

export const avatar = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    res.status(200).json({
      user: {
        gender: user.gender
      },

    });
  } catch (error) {
    console.error("Error in Task's List controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* ===================== Edit Profile  ===================== */

export const editProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    const { fullName, email, gender, profilePic } = req.body;

    if (!fullName && !email && !gender && !password && !profilePic) {
      return res.status(400).json({ message: "Nothing to Update" });
    }


    if (fullName) {
      user.fullName = fullName;
    }


    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address" });
      }
      user.email = email;
    }


    if (gender) {
      user.gender = gender;
    }


    if (profilePic) {
      const uploadResult = await cloudinary.uploader.upload(profilePic);
      user.profilePic = uploadResult.secure_url;
      // user.profilePic = profilePic;
    }

    await user.save();

    res.status(200).json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
        gender: user.gender
      },

    });
  } catch (error) {
    console.error("Error in Task's List controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const uploadAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    const { profilePic } = res.body;

    if (!profilePic) {
      return res.status(400).json({ message: "Nothing to Update" });
    }

    const uploadResult = await cloudinary.uploader.upload(profilePic);
    updates.profilePic = uploadResult.secure_url;
    user.profilePic = profilePic;

    res.status(200).json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
        gender: user.gender
      },

    });
  } catch (error) {
    console.error("Error in Task's List controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* ===================== Change password ===================== */

export const changepassword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    const { oldpassword, newpassword, confirmnewpassword } = req.body;

    if (!oldpassword || !newpassword || !confirmnewpassword) {
      return res.status(400).json({ message: "Please provide all the required fields" });
    }

    if (newpassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    if (newpassword !== confirmnewpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const isMatch = await bcrypt.compare(oldpassword, user.password);
    if (!isMatch) return res.status(400).json({ message: "Password is incorrect" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newpassword, salt);

    user.password = hashedPassword;

    await user.save();

    res.status(200).json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
        gender: user.gender
      },

    });
  } catch (error) {
    console.error("Error in Task's List controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

