const Product = require('../models/product');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || price == null) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const product = new Product({ name, description, price });

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllProducts,
  createProduct
};
