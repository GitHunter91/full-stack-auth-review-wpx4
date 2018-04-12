require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const userController = require('./userController');

const app = express();
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUnitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 14,
  },
}));

app.get('/auth/callback', userController.authentication);
app.get('/api/profile', userController.profile);
app.post('/api/logout', userController.logout);

const PORT = 4000
app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT + ' 🚀')
})