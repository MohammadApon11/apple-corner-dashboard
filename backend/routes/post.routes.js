// import express from "express";
// import protectRoute from "../middleware/protectRoute.js";
// import {
//   createHero,
//   createEvent,
//   createProduct,
//   getHero,
//   getEvents,
//   getProducts,
//   deleteHero,
//   deleteEvent,
//   deleteProduct,
//   selectedHero,
//   selectedEvent,
//   selectedProduct,
//   updateHero,
//   updateEvent,
//   updateProduct,
// } from "../controllers/post.controllers.js";
const express = require("express");
const protectRoute = require("../middleware/protectRoute.js");
const {
  createHero,
  createEvent,
  createProduct,
  getHero,
  getEvents,
  getProducts,
  deleteHero,
  deleteEvent,
  deleteProduct,
  selectedHero,
  selectedEvent,
  selectedProduct,
  updateHero,
  updateEvent,
  updateProduct,
} = require("../controllers/post.controllers.js");

const router = express.Router();

router.post("/api/posts/createHero", protectRoute, createHero);
router.post("/api/posts/createEvent", protectRoute, createEvent);
router.post("/api/posts/createProduct", protectRoute, createProduct);

router.get("/api/posts/getHero", getHero);
router.get("/api/posts/getEvents", getEvents);
router.get("/api/posts/getProducts", getProducts);

router.put("/api/posts/updateHero/:id", protectRoute, updateHero);
router.put("/api/posts/updateEvent/:id", protectRoute, updateEvent);
router.put("/api/posts/updateProduct/:id", protectRoute, updateProduct);

router.put("/api/posts/selectedHero/:id", protectRoute, selectedHero);
router.put("/api/posts/selectedEvent/:id", protectRoute, selectedEvent);
router.put("/api/posts/selectedProduct/:id", protectRoute, selectedProduct);

router.delete("/api/posts/deleteHero/:id", protectRoute, deleteHero);
router.delete("/api/posts/deleteEvent/:id", protectRoute, deleteEvent);
router.delete("/api/posts/deleteProduct/:id", protectRoute, deleteProduct);

module.exports = router;
// export default router;
