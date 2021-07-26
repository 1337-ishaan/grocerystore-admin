const mongoose = require("mongoose");

var Users = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model("Users", Users);
