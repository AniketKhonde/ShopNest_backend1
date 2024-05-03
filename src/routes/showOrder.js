const express = require('express');
const router = express.Router();

// Import the controller functions for handling orders
const { fetchOrdersForUser } = require('../controllers/showOrderController');

// Define routes
router.get('/:userId', fetchOrdersForUser); // Example route for fetching orders for a specific user

module.exports = router;