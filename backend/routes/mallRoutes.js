const express = require('express');
const router = express.Router();

// Placeholder routes for mall (products)
router.get('/products', (req, res) => res.json({ products: [] }));
router.get('/products/:id', (req, res) => res.json({ product: null }));
router.post('/products', (req, res) => res.json({ message: 'Create a product' }));

module.exports = router;
