// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import authRoutes from "./routes/auth.routes.js";
// import { v2 as cloudinary } from "cloudinary";
// import postRoutes from "./routes/post.routes.js";
// import conncectToMongoDB from "./db/connectToMongoDB.js";
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes.js");
const conncectToMongoDB = require("./db/connectToMongoDB.js");
const postRoutes = require("./routes/post.routes.js");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  conncectToMongoDB();
  console.log(`server runnig is port ${PORT}`);
});
