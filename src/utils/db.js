const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGO_URL

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

module.exports = connectToDatabase;
