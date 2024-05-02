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
const postRoutes = require("./routes/post.routes.js");
const { default: mongoose } = require("mongoose");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const router = express.Router();
// middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.json("Yes from Apple corner server server");
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`ERROR ${error}`);
  });
app.listen(PORT, () => {
  // conncectToMongoDB();
  console.log(`server runnig is port ${PORT}`);
});
