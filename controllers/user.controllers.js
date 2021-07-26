const passport = require("passport");
const strategy = require("passport-facebook");

const Users = require("../models/Users");


const FACEBOOK_CLIENT_ID = "115083787416610";
const FACEBOOK_CLIENT_SECRET = "0c9c97f3c42b87761a38b92991884b9b";

const FacebookStrategy = strategy.Strategy;


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/", // to replace
      profileFields: ["email", "name"]
    },
    function(accessToken, refreshToken, profile, done) {
      const { email, first_name, last_name } = profile._json;
      const userData = {
        email,
        firstName: first_name,
        lastName: last_name
      };
      new Users(userData).save();
      done(null, profile);
    }
  )
);
