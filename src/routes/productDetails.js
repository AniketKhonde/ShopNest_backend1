const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Route to fetch product details by ID
router.get('/:productId', productsController.getProductDetails);

module.exports = router;
