const express = require("express");
const admin = require("firebase-admin");

const serviceAccount = require("../../blog-g-552c5-firebase-adminsdk-e0934-8c0e5eb60f.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const verifyToken = async (req, res) => {
  const token = req.body.token;
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);

    if (decodedToken) {
      res.json({ isValid: true });
    } else {
      res.json({ isValid: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Token verification failed", details: error.message });
  }
};

module.exports = { verifyToken };
