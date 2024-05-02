// import express from "express";
// import { login, logout, signup } from "../controllers/auth.controllers.js";
const express = require("express");
const { login, logout, signup } = require("../controllers/auth.controllers.js");

const router = express.Router();

router.post("/api/auth/signup", signup);
router.post("/api/auth/login", login);
router.post("/api/auth/logout", logout);

module.exports = router;
// export default router;
