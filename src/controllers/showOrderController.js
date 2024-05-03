const Order = require('../models/order');

// Route to fetch orders for a specific user
const fetchOrdersForUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        // Find orders where the user field matches the user's ID
        const orders = await Order.find({ user: userId }).populate('products'); // Populate products if needed
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

module.exports = {
    fetchOrdersForUser
};
