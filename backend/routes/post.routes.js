import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
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
} from "../controllers/post.controllers.js";

const router = express.Router();

router.post("/createHero", protectRoute, createHero);
router.post("/createEvent", protectRoute, createEvent);
router.post("/createProduct", protectRoute, createProduct);

router.get("/getHero", protectRoute, getHero);
router.get("/getEvents", protectRoute, getEvents);
router.get("/getProducts", protectRoute, getProducts);

router.put("/updateHero/:id", protectRoute, updateHero);
router.put("/updateEvent/:id", protectRoute, updateEvent);
router.put("/updateProduct/:id", protectRoute, updateProduct);

router.put("/selectedHero/:id", protectRoute, selectedHero);
router.put("/selectedEvent/:id", protectRoute, selectedEvent);
router.put("/selectedProduct/:id", protectRoute, selectedProduct);

router.delete("/deleteHero/:id", protectRoute, deleteHero);
router.delete("/deleteEvent/:id", protectRoute, deleteEvent);
router.delete("/deleteProduct/:id", protectRoute, deleteProduct);

export default router;
