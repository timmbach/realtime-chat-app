import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller";
import verifyUser from "../middleware/verifyUser";

const router = express.Router();

router.get("/:id", verifyUser, getMessages);
router.post("/send/:id", verifyUser, sendMessage);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
