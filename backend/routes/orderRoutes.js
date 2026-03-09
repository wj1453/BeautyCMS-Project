const express = require('express');
const router = express.Router();

// Placeholder routes for orders
router.get('/', (req, res) => res.json({ message: 'Get all orders' }));
router.post('/', (req, res) => res.json({ message: 'Create an order' }));
router.get('/:id', (req, res) => res.json({ message: 'Get order detail' }));

module.exports = router;
