const express = require('express');
const APIRouter = require('./APIRouter');
const bodyParser = require('body-parser');
// 1.) Passport.js und entsprechendes Plugin importieren
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
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
  passport.authenticate('facebook'),
  apiRouter
);

// 4.) Strategy instanziieren
const strategy = new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // ...
  }
);

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
