const express = require('express');
const router = express.Router();
const cartController = require('../controllers/showCartController');

// Route to fetch cart items for a user
router.get('/:userId', cartController.getCartItems);

module.exports = router;