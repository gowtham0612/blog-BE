const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGO_URL || 'mongodb+srv://gowtham:Gowtham123@cluster0.o7fe2uc.mongodb.net/Blog?retryWrites=true&w=majority';

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
