const { Router } = require("express");
const routes = Router();
const UserRoutes = require("./userRoutes");
//Common Routes
routes.use("/user", UserRoutes);

module.exports = routes;
