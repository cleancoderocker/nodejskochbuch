const express = require('express');
const APIRouter = require('./APIRouter');
const bodyParser = require('body-parser');
// 1.) Passport.js und entsprechendes Plugin importieren
const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const app = new express();
const apiRouter = new APIRouter();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 2.) Passport.js als Middleware registrieren
app.use(passport.initialize());
// 3.) Authentifizierung für Route aktivieren
app.use(
  '/api/v1',
  passport.authenticate('basic', { session: false }),
  apiRouter
);

// Dummy Authentifizierung
const authenticate = (username, password) =>
  username === 'admin' && password === 'password';

// 4.) Strategy instanziieren
const strategy = new BasicStrategy(async (username, password, done) => {
  const authenticated = await authenticate(username, password);
  if (!authenticated) {
    done('Wrong credentials');
  } else {
    done(null, {
      username
    });
  }
});

// 5.) Strategy in Passport.js registrieren
passport.use(strategy);

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server started at: http://localhost:${PORT}`);
  }
});

module.exports = app;
