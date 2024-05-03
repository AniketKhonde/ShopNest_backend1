const User = require('../models/user');
const CartItem = require('../models/cartItem');
const Product = require('../models/product');

exports.addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        // Find the user by userId
        const user = await User.findById(userId);

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find the product by productId
        const product = await Product.findById(productId);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Create or update the user's cart item with product details
        let cartItem = await CartItem.findOne({ user: userId, product: productId });

        if (!cartItem) {
            // Create a new cart item with product details
            cartItem = new CartItem({ 
                user: userId, 
                product: productId, // Use productId directly
                quantity 
            });
        } else {
            // Update the quantity if the cart item already exists
            cartItem.quantity += quantity;
        }

        await cartItem.save();

        res.json({ message: 'Product added to cart successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};
