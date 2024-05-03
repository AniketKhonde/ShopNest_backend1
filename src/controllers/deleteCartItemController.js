// Import necessary modules
const CartItem = require('../models/cartItem');

// Controller function to delete an order
const deleteCartItem = async (req, res) => {
    try {
        const itemId = req.params.itemId; // Get the orderId from the request parameters

        // Fetch the order
        const item = await CartItem.findById(itemId);
        if (!item) {
            return res.status(404).json({ error: 'item not found' });
        }


        // Delete the order from the database
        await CartItem.findByIdAndDelete(itemId);

        // Send a success response
        res.json({ message: 'item deleted successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error deleting item:', error);
        res.status(500).json({ error: 'Failed to delete item' });
    }
};

// Export the controller function
module.exports = {
    deleteCartItem,
};

