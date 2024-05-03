const express = require('express');
const router = express.Router();
const  {deleteCartItem} = require('../controllers/deleteCartItemController');

router.delete('/:itemId', deleteCartItem);

module.exports = router;