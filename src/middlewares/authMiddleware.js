const admin = require('firebase-admin');

const serviceAccount = require('../../blog-g-552c5-firebase-adminsdk-e0934-8c0e5eb60f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

function authenticate(req, res, next) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = header.split(' ')[1];

  admin.auth().verifyIdToken(token)
    .then(decodedToken => {
      req.user = decodedToken; 
      next();
    })
    .catch(error => {
      console.error("Token verification failed:", error);
      res.status(401).json({ error: 'Invalid token' });
    });
}

module.exports = authenticate;
