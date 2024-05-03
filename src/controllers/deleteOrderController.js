// Import necessary modules
const Order = require('../models/order');

// Controller function to delete an order
const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId; // Get the orderId from the request parameters

        // Fetch the order
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }


        // Delete the order from the database
        await Order.findByIdAndDelete(orderId);

        // Send a success response
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error deleting order:', error);
        res.status(500).json({ error: 'Failed to delete order' });
    }
};

// Export the controller function
module.exports = {
    deleteOrder,
};