const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Create Schema
const FormUsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },

  message: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("FormUsers", FormUsersSchema);
