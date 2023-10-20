const express = require("express");
const { verifyToken } = require("../controllers/authController");

const router = express.Router();
//authRoute
router.post("/verify-token", verifyToken);

module.exports = router;
