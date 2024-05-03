const express = require('express');
const router = express.Router();
const  {deleteOrder} = require('../controllers/deleteOrderController');

router.delete('/:orderId', deleteOrder);

module.exports = router;