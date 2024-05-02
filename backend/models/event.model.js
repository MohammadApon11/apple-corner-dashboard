import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
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

const Event = mongoose.model("Event", eventSchema);

export default Event;
