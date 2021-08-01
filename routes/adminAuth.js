const express = require("express");
const passport = require("passport");

const router = express.Router();

router.post("/", passport.authenticate("local"), (req, res) => {
  res.status(200).send({
    message: "You logged in!",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send({
    message: "You logged out!",
  });
});

router.get("/whoami", (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;
