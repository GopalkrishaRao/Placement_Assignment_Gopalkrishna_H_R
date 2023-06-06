const express = require('express');
const app = express();

// Middleware to check if user is authenticated
const authenticateUser = (req, res, next) => {
 
  const isAuthenticated = false;

  if (isAuthenticated) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

// Route handler to get post data
app.get('/post', authenticateUser, (req, res) => {
  const postData =  {};
  res.json(postData);
});
app.listen(3000)