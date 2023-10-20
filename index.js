const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const Routes = require("./src/routes");
const connectToDatabase = require("./src/utils/db");
const admin = require('firebase-admin');
const app = express();
app.use(cors());

// Connect to the MongoDB database
connectToDatabase();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to G-Blog");
});
app.use("/api/v1", Routes);

const serviceAccount = require('./blog-g-552c5-firebase-adminsdk-e0934-8c0e5eb60f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


app.post('/verify-token', async (req, res) => {
  const token = req.body.token;
  // console.log("token",token)
  try {
    // Verify the token using Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);

    if (decodedToken) {
      res.json({ isValid: true });
    } else {
      res.json({ isValid: false });
    }
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(500).json({ error: 'Token verification failed', details: error.message });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
