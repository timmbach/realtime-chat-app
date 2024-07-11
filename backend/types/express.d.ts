import { MyJwtPayload } from "../path-to-your-jwt-payload-interface";
import { Request, Express } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

declare module "express-serve-static-core" {
  interface Request {
    user?: any; // Adjust this type according to your use case, e.g., `User`, `JwtPayload`, etc.
  }
}
