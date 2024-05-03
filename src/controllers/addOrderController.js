const Order = require('../models/order'); 
const User = require('../models/user');
const Product = require('../models/product');

// Controller function to add an order
const addToOrder = async (req, res) => {
    try {
        // Get data from request body
        const { userId, productId, totalPrice } = req.body;
        
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Create a new order instance
        const order = new Order({
            user: userId,
            products: [productId], // Assuming one product per order for now
            totalPrice: totalPrice,
            status: 'Pending',// Default status
            orderDate: new Date(), 
        });

        // Save the order to the database
        await order.save();

        // Send a success response with the saved order data
        res.json({ message: 'Product ordered successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error adding order:', error);
        res.status(500).json({ error: 'Failed to add order' });
    }
};

module.exports = {
    addToOrder,
};
