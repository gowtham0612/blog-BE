const { Router } = require("express");
const router = Router();
const { createUser } = require("../controllers/userController");

//Users Routes
router.post("/post", createUser);

module.exports = router;
