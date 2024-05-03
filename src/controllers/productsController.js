const Product = require('../models/product');

// Controller function to fetch product details by ID
exports.getProductDetails = async (req, res) => {
    const productId = req.params.productId;
    try {
        // Query the database to find the product by its ID
        const product = await Product.findById(productId);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // If the product exists, return its details
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};
