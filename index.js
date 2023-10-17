const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const Routes = require("./src/routes");
const connectToDatabase = require("./src/utils/db");

const app = express();

// Connect to the MongoDB database
connectToDatabase();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to G-Blog");
});
app.use("/api/v1", Routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
