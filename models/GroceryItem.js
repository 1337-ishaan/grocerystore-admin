const mongoose = require("mongoose");
var GroceryItemSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  description: String,
  image: String,
  price: Number,
  category: String,

  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Grocery", GroceryItemSchema);
