const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/google', authController.googleAuthenticate);
router.get('/google/callback', authController.googleCallback);
router.get('/logout', authController.logout);
router.get('/profile', authMiddleware.verifyToken, authController.getProfile);

module.exports = router;
