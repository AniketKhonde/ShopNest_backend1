const express = require('express');
const router = express.Router();
const productsController = require('../controllers/showProductController');

// Define routes
router.get('/', productsController.getAllProducts);
// Add more routes as needed

module.exports = router;



