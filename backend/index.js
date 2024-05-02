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
// login import
const { signup, login, logout } = require("./controllers/auth.controllers.js");
const protectRoute = require("./middleware/protectRoute.js");
const { createHero, createEvent, createProduct, getHero, getEvents, getProducts, updateHero, updateEvent, updateProduct, selectedHero, selectedEvent, selectedProduct, deleteHero, deleteEvent, deleteProduct } = require("./controllers/post.controllers.js");
// posts import

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

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

// login routes
app.post("/api/auth/signup", signup);
app.post("/api/auth/login", login);
app.post("/api/auth/logout", logout);

// posts routes
app.post("/api/posts/createHero", protectRoute, createHero);
app.post("/api/posts/createEvent", protectRoute, createEvent);
app.post("/api/posts/createProduct", protectRoute, createProduct);

app.get("/api/posts/getHero", getHero);
app.get("/api/posts/getEvents", getEvents);
app.get("/api/posts/getProducts", getProducts);

app.put("/api/posts/updateHero/:id", protectRoute, updateHero);
app.put("/api/posts/updateEvent/:id", protectRoute, updateEvent);
app.put("/api/posts/updateProduct/:id", protectRoute, updateProduct);

app.put("/api/posts/selectedHero/:id", protectRoute, selectedHero);
app.put("/api/posts/selectedEvent/:id", protectRoute, selectedEvent);
app.put("/api/posts/selectedProduct/:id", protectRoute, selectedProduct);

app.delete("/api/posts/deleteHero/:id", protectRoute, deleteHero);
app.delete("/api/posts/deleteEvent/:id", protectRoute, deleteEvent);
app.delete("/api/posts/deleteProduct/:id", protectRoute, deleteProduct);

// app.use("/api/auth", authRoutes);
// app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  conncectToMongoDB();
  console.log(`server runnig is port ${PORT}`);
});
