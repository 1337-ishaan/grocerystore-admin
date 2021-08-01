const mongoose = require("mongoose");
var GroceryItemSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  description: String,
  image: String,
  price: Number,
  discount_price: Number,
  category: [String],
  active: Boolean,
  stock: Number,  //Out of stock
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Grocery", GroceryItemSchema);
