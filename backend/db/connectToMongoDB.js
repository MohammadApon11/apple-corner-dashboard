// import mongoose from "mongoose";
const mongoose = require("mongoose");

const conncectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

module.exports = conncectToMongoDB;
// export default conncectToMongoDB;
