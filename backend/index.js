const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const cloudinary = require("./cloudinary");


app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://abbeyjenkins102_db_user:KingdomOfNight_73@cluster0.zbkl26x.mongodb.net/e-commerce");

// API Creation
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Multer temp storage (Cloudinary will store final file)
const upload = multer({ dest: "tmp/" });

// --- CLOUDINARY UPLOAD ENDPOINT ---
app.post("/upload", upload.single("product"), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "products",
        });

        // Delete temp file
        fs.unlinkSync(req.file.path);

        return res.json({
            success: 1,
            image_url: result.secure_url,
        });
    } catch (err) {
        console.error("Cloudinary upload error:", err);
        return res.status(500).json({ success: 0, message: "Upload failed" });
    }
});

// Schema for creating products
const Product = mongoose.model("Product", {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    side_images: { type: [String], default: [] },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true },
});

// Add product
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
        id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        side_images: req.body.side_images || [],
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    await product.save();
    res.json({ success: true, name: req.body.name });
});

// Remove product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true, name: req.body.name });
});

// Get all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    res.send(products);
});

// User schema
const Users = mongoose.model('Users', {
    name: String,
    email: { type: String, unique: true },
    password: String,
    cartData: Object,
    date: { type: Date, default: Date.now },
});

// Signup
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) return res.status(400).json({ success: false, errors: "This email is already linked to an account" });

    let cart = {};
    for (let i = 0; i < 300; i++) cart[i] = 0;

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();

    const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');
    res.json({ success: true, token });
});

// Login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });

    if (!user)
        return res.json({ success: false, errors: "Email is not linked to an account" });

    if (req.body.password !== user.password)
        return res.json({ success: false, errors: "Wrong Password" });

    const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');
    res.json({ success: true, token });
});

// Middleware
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).send({ errors: "Please authenticate using a valid token" });

    try {
        const data = jwt.verify(token, 'secret_ecom');
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
};

// Add to cart
app.post('/addtocart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemID] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Added");
});

// Remove from cart
app.post('/removefromcart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id });

    if (userData.cartData[req.body.itemID] > 0) {
        userData.cartData[req.body.itemID] -= 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    }

    res.send("Removed");
});

// Get cart
app.post('/getcart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
});

app.listen(port, (error) => {
    if (!error) console.log("Server running on port " + port);
    else console.log("Error : " + error);
});
