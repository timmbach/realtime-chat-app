import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { Express, NextFunction, Request, Response } from "express";
import User from "../models/user.model";

const verifyUser = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No active token provided" });
    }

    const jwtSecret: Secret | undefined = process.env.JWT_SECRET;

    if (jwtSecret) {
      const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
      if (!decoded) {
        return res.status(401).json({ error: "Unauthorized - Invalid Token" });
      }
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (user) {
        req.user = user as JwtPayload;

        // console.log(user);
        next();
      }
    } else {
      console.log("jwt secret is undefined");
    }
  } catch (error: any) {
    console.log("Error in verifyUser middleware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default verifyUser;
