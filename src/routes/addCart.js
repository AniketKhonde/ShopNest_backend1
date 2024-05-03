const express = require('express');
const router = express.Router();
const cartController = require('../controllers/addCartController');

// Route to add a product to the cart
router.post('/add', cartController.addToCart);

module.exports = router;