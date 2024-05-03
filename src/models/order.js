const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Processing', 'Shipped', 'Delivered'], default: 'Pending' },
  orderDate: { type: Date, default: Date.now }
  // You can add more fields as needed, such as shipping address, payment method, etc.
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
