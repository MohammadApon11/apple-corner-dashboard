const Hero = require("../models/hero.model.js");
const Event = require("../models/event.model.js");
const Product = require("../models/product.model.js");

// get
const getHero = async (req, res) => {
  try {
    const post = await Hero.find();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getEvents = async (req, res) => {
  try {
    const post = await Event.find();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getProducts = async (req, res) => {
  try {
    const post = await Product.find();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// create
const createHero = async (req, res) => {
  try {
    const { title, icon, description1, description2 } = req.body;
    let { image } = req.body;

    console.log(req.body);

    if (!description1) {
      return res
        .status(400)
        .json({ error: "Description 1 fields are required" });
    }

    await Hero.updateMany({}, { selected: false });

    const newPost = new Hero({
      title,
      icon,
      description1,
      description2,
      image,
      selected: true,
    });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};
const createEvent = async (req, res) => {
  try {
    const { title, icon, description1, description2 } = req.body;
    let { image } = req.body;

    if (!description1 || !description2) {
      return res.status(400).json({ error: "Description fields are required" });
    }

    await Event.updateMany({}, { selected: false });

    const newPost = new Event({
      title,
      icon,
      description1,
      description2,
      image,
      selected: true,
    });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};
const createProduct = async (req, res) => {
  try {
    const { title, icon, description1, description2 } = req.body;
    let { image } = req.body;

    if (!description1) {
      return res.status(400).json({ error: "Description fields are required" });
    }

    await Product.updateMany({}, { selected: false });

    const newPost = new Product({
      title,
      icon,
      description1,
      description2,
      image,
      selected: true,
    });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

// update
const updateHero = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, icon, description1, description2, image } = req.body;

    console.log(req.body);

    // Find the hero by id
    let hero = await Hero.findById(id);

    if (!hero) {
      return res.status(404).json({ error: "Hero not found" });
    }

    // Update the hero data
    if (title) hero.title = title;
    if (icon) hero.icon = icon;
    if (description1) hero.description1 = description1;
    if (description2) hero.description2 = description2;
    if (image) hero.image = image;

    // Save the updated hero
    await hero.save();

    res.status(200).json({ message: "Hero updated successfully", hero });
  } catch (error) {
    console.log("Error in updateHero controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, icon, description1, description2, image } = req.body;

    // Find the event by id
    let event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Update the event data
    if (title) event.title = title;
    if (icon) event.icon = icon;
    if (description1) event.description1 = description1;
    if (description2) event.description2 = description2;
    if (image) event.image = image;

    // Save the updated hero
    await event.save();

    res.status(200).json({ message: "Event updated successfully", event });
  } catch (error) {
    console.log("Error in updateEvent controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, icon, description1, description2, image } = req.body;

    // Find the product by id
    let product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product data
    if (title) product.title = title;
    if (icon) product.icon = icon;
    if (description1) product.description1 = description1;
    if (description2) product.description2 = description2;
    if (image) product.image = image;

    // Save the updated product
    await product.save();

    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    console.log("Error in updateProduct controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// select update
const selectedHero = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the hero by id
    const hero = await Hero.findById(id);

    if (!hero) {
      return res.status(404).json({ error: "Hero not found" });
    }
    if (hero.selected) {
      return res
        .status(200)
        .json({ message: "Hero selection updated successfully", hero });
    }
    // Set the selected field of all heroes to false
    await Hero.updateMany({}, { selected: false });

    // Set the selected field of the hero with the provided id to true
    hero.selected = true;

    // Save the updated hero
    await hero.save();

    res
      .status(200)
      .json({ message: "Hero selection updated successfully", hero });
  } catch (error) {
    console.log("Error in selectedHero controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
const selectedEvent = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the event by id
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    if (event.selected) {
      return res
        .status(200)
        .json({ message: "Event selection updated successfully", event });
    }
    // Set the selected field of all events to false
    await Event.updateMany({}, { selected: false });

    // Set the selected field of the event with the provided id to true
    event.selected = true;

    // Save the updated event
    await event.save();

    res
      .status(200)
      .json({ message: "Event selection updated successfully", event });
  } catch (error) {
    console.log("Error in selectedEvent controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
const selectedProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the hero by id
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    if (product.selected) {
      return res
        .status(200)
        .json({ message: "Product selection updated successfully", product });
    }
    // Set the selected field of all Products to false
    await Product.updateMany({}, { selected: false });

    // Set the selected field of the Product with the provided id to true
    product.selected = true;

    // Save the updated product
    await product.save();

    res
      .status(200)
      .json({ message: "Product selection updated successfully", product });
  } catch (error) {
    console.log("Error in selectedProduct controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// delete
const deleteHero = async (req, res) => {
  try {
    const post = await Hero.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Hero not found" });
    }

    // if (post.img) {
    //   const imgId = post.img.split("/").pop().split(".")[0];
    //   await cloudinary.uploader.destroy(imgId);
    // }

    await Hero.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Hero deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteEvent = async (req, res) => {
  try {
    const post = await Event.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Event not found" });
    }

    // if (post.img) {
    //   const imgId = post.img.split("/").pop().split(".")[0];
    //   await cloudinary.uploader.destroy(imgId);
    // }

    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const post = await Product.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Product not found" });
    }

    // if (post.img) {
    //   const imgId = post.img.split("/").pop().split(".")[0];
    //   await cloudinary.uploader.destroy(imgId);
    // }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getHero,
  getEvents,
  getProducts,
  createHero,
  createEvent,
  createProduct,
  updateHero,
  updateEvent,
  updateProduct,
  selectedHero,
  selectedEvent,
  selectedProduct,
  deleteHero,
  deleteEvent,
  deleteProduct,
};
