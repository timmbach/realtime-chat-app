import jwt, { Secret } from "jsonwebtoken";
import { Express, Request, Response } from "express";
import { Types } from "mongoose";

const generateTokenAndSetCookie = (userId: Types.ObjectId, res: Response) => {
  const jwtSecret: Secret | undefined = process.env.JWT_SECRET;
  if (jwtSecret) {
    const token = jwt.sign({ userId }, jwtSecret, {
      expiresIn: "15d",
    });

    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });
  } else {
    console.log("jwt secret is undefined");
  }
};

export default generateTokenAndSetCookie;
