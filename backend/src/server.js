import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import http from "http";
import path from "path";
import cookieParser from "cookie-parser";
import { ENV } from "./lib/env.js";
// import { app, server } from "./lib/socket.js";

import authRoutes from "./routes/auth.route.js";
import taskRoutes from "./routes/task.route.js";

dotenv.config();


const __dirname = path.resolve();

const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));// This will prevent PayloadTooLargeError(This means request of size upto 10mb can come from the frontend)
app.use(cors({origin: ENV.CLIENT_URL, credentials: true}));// This will allow frontend to send cookies to our backend
app.use(cookieParser());

const PORT=process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });
}

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
