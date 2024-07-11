import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";
import userRoutes from "./routes/user.route";
import connectToMongoDB from "./db/connectToDB";
import { app, server } from "./socket/socket";
dotenv.config();

// const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
