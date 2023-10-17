const User = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send("done");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createUser,
};
