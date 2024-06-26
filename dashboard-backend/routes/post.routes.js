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

router.post("/createHero", protectRoute, createHero);
router.post("/createEvent", protectRoute, createEvent);
router.post("/createProduct", protectRoute, createProduct);

router.get("/getHero", getHero);
router.get("/getEvents", getEvents);
router.get("/getProducts", getProducts);

router.put("/updateHero/:id", protectRoute, updateHero);
router.put("/updateEvent/:id", protectRoute, updateEvent);
router.put("/updateProduct/:id", protectRoute, updateProduct);

router.put("/selectedHero/:id", protectRoute, selectedHero);
router.put("/selectedEvent/:id", protectRoute, selectedEvent);
router.put("/selectedProduct/:id", protectRoute, selectedProduct);

router.delete("/deleteHero/:id", protectRoute, deleteHero);
router.delete("/deleteEvent/:id", protectRoute, deleteEvent);
router.delete("/deleteProduct/:id", protectRoute, deleteProduct);

module.exports = router;
