import { MyJwtPayload } from "../path-to-your-jwt-payload-interface";

declare global {
  namespace Express {
    interface Request {
      user?: MyJwtPayload;
    }
  }
}
