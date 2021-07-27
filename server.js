const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const auth = require("./auth");
const groceryItems = require("./routes/grocery.js");
const orders = require("./routes/orders.js");
const payments = require("./routes/payments.js");
const facebookRouter = require("./routes/facebookAuth.js");
const addToCart = require("./routes/addToCart.js");
const formData = require("./routes/formData.js");
const adminAuth = require("./routes/adminAuth");
const strategy = require("passport-facebook");
const sendOTP = require("./routes/twilio.js");
const GOOGLE_CLIENT_ID =
  "504089142769-s8i324k1u3bdlo0933dlds5l2hrd94ek.apps.googleusercontent.com";
const GOOGLE_SECRET = "_hU7CJYucc1xZjP44DsTnM1-";
const app = express();
const PORT = 3010;
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const connectDB = async () => {
  mongoose
    .connect("mongodb://localhost:27017/adminpanel", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.error("Not Connected"));
};

//connecting the database
connectDB();

app.use(passport.initialize());
app.use(passport.session());
auth.initialize();

app.use("/api/groceryItems", groceryItems);
app.use("/api/orders", orders);
app.use("/api/payments", payments);
app.use("/api/addToCart", addToCart);
app.use("/api/form", formData);
app.use("/api/admin-login", adminAuth);

app.post("/api/sendotp", (req, res) => sendOTP(req, res));
app.use("/api/facebook-login", facebookRouter);

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_SECRET,
      callbackURL: "/",
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }), // login is example, can add route
  function (req, res) {
    res.redirect("/");
  }
);

// listen to PORT
app.listen(PORT, () => console.log(`Server listening on ${PORT}`)); // need to put the PORT to .env

// TODO: OTP ke liye twilio se integration
// Login Panel for admin panel
// Admin panel complete UI
// Google, Facebook keys for testing
