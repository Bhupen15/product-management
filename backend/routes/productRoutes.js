const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');

const router = express.Router();

// GET /api/products
router.get('/productlist', getAllProducts);

// POST /api/products
router.post('/productform', createProduct);

module.exports = router;
