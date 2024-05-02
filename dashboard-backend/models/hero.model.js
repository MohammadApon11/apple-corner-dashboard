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
    },
    description2: {
      type: String,
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
