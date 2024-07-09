import bcrypt from "bcryptjs";
import { Express, Request, Response } from "express";
import User from "../models/user.model";
import generateTokenAndSetCookie from "../utils/generateToken";

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullName, username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Passwords don't match",
      });
    }

    // check if username exists
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profilePic = `https://avatar.iran.liara.run/public/boy`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      profilePic,
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error: any) {
    console.log("error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const passwordCheck = await bcrypt.compare(password, user?.password || "");

    if (!user || !passwordCheck) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error: any) {
    console.log("error in login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const logout = (req: Request, res: Response) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successful" });
  } catch (error: any) {
    console.log("error in logoutttt controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
