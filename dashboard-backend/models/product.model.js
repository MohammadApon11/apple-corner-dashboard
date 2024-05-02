// import mongoose from "mongoose";
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    description1: {
      type: String,
    },
    description2: {
      type: String,
    },
    image: {
      type: String,
    },
    selected: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
// const Product = mongoose.model("Product", productSchema);

// export default Product;
