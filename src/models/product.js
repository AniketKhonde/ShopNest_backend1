const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: {
    type: String, // Store the URL or path to the image
    required: true
  }
  // You can add more fields as needed, such as images, stock quantity, etc.
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
