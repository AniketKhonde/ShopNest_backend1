
// module.exports = router;
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/addOrderController');

// Route to add an order
router.post('/add', orderController.addToOrder); // Ensure that the path is correct

module.exports = router;


