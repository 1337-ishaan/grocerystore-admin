const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let groceryItemSchema = new Schema({
  name: {
    type: String
  },
  quantity: {
    type: String
  },
  description: {
    type: String
  },
  amount: {
    type: String // kept the type string because the user can add currency as well 
  },
  image: {
    type: String  
  },
}, {
    collection: 'groceryItems'
  })

module.exports = mongoose.model('Grocery', studentSchema)