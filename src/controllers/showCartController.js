// Assuming you have a CartItem model representing cart items

const CartItem = require('../models/cartItem');

// Controller function to fetch cart items for a user
const getCartItems = async (req, res) => {

    const userId = req.params.userId;
    try {
        
        // Find cart items for the user
        const cartItems = await CartItem.find({ user: userId }).populate('product');
        res.json(cartItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};
module.exports = {
    getCartItems
};
