import express, { Express, Request, Response } from "express";
import { getMessages, sendMessage } from "../controllers/message.controller";
import verifyUser from "../middleware/verifyUser";
import { getUsers } from "../controllers/user.controller";

const router = express.Router();

router.get("/", verifyUser, getUsers);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
