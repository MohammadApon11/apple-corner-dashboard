// import mongoose from "mongoose";
const mongoose = require("mongoose");

const heroSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    description1: {
      type: String,
      maxLength: 40,
    },
    description2: {
      type: String,
      maxLength: 40,
    },
    image: {
      type: String,
    },
    public_id: {
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

module.exports = mongoose.model("Hero", heroSchema);
// const Hero = mongoose.model("Hero", heroSchema);

// export default Hero;
