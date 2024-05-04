const express = require("express");
const middleware = require('./middlewares/middleware');
const mongoose = require("mongoose");
const cloudinary = require('cloudinary').v2;
const productRoutes=require('./routes/showProduct')
const authRoutes = require('./routes/auth'); // Import authRoutes
const loginRoutes = require('./routes/login'); // Import loginRoutes
const profileRoutes = require('./routes/showProfile');
const saveprofileRoutes=require('./routes/profile')
const productsRoutes = require('./routes/productDetails');
const addcartRoutes = require("./routes/addCart");
const showcartRoutes = require("./routes/showCart");
const showprofileRoutes = require('./routes/showProfile');
const showorderRoutes = require("./routes/showOrder");
const addorderRoutes = require("./routes/addOrder");
const deleteorderRoutes=require("./routes/deleteOrder")
const deletecartitemsRoutes=require("./routes/deleteCartItems")
require('dotenv').config();

const app = express();

// Middleware
// Use middleware

app.use(middleware.parseJson);
app.use(middleware.handleCors);
app.use(middleware.secureHeaders);
app.use(middleware.logRequests);

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// MongoDB Connection
const PORT = process.env.PORT || 3000;
(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is listening at port ${PORT}`);
        });
    } catch (error) {
        console.error(`Error occurred during database connection: ${error}`);
    }
})();



// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/saveProfile', saveprofileRoutes);
app.use('/api/productDetails', productsRoutes);
app.use('/api/addcart', addcartRoutes);
app.use('/api/deleteCartItem', deletecartitemsRoutes);
app.use('/api/showcart', showcartRoutes);
app.use('/api/showprofile', showprofileRoutes);
app.use('/api/showorder', showorderRoutes);
app.use('/api/deleteorder', deleteorderRoutes);
app.use('/api/addorder', addorderRoutes);
