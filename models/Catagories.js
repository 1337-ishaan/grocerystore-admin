const mongoose = require("mongoose");

const CatagorySchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  status: { type: Boolean, required: true },
});

module.exports = mongoose.model("Catagory", CatagorySchema);
