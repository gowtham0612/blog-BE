const { Router } = require("express");
const routes = Router();
const UserRoutes = require("./userRoutes");
const AuthRoutes = require("./authRoutes");
//Common Routes
routes.use("/user", UserRoutes);
routes.use("/auth", AuthRoutes);

module.exports = routes;
