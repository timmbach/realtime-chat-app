import bcrypt from "bcryptjs";
import { Express, Request, Response } from "express";
import User from "../models/user.model";
import generateTokenAndSetCookie from "../utils/generateToken";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const currentUserId = req.user._id;

    const allOtherUsers = await User.find({
      _id: { $ne: currentUserId },
    }).select("-password");
    res.status(200).json(allOtherUsers);
  } catch (error: any) {
    console.log("error in getUsers controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
