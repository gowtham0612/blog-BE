const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Welcome to G-Blog");
});
app.post("/none", (req, res) => {
  const { helo } = req.body;
  if (helo === 1) {
    console.log("success");
    res.send("sucess");
  } else {
    console.log("again");
    res.send("again");
  }
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
