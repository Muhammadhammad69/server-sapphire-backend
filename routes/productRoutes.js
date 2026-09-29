const express = require('express');

const router = express.Router();

const Product = require('../models/Product');




// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();

        res.json(products);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});


// Seed products
router.post('/seed', async (req, res) => {
    try {
        await Product.bulkCreate(defaultTechProducts);

        res.status(201).json({
            message: "All products seeded successfully!"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});



router.post('/', async (req, res) => {
    try {
        const {
            title,
            price,
            description,
            image,
            category
        } = req.body;

        console.log('Received product data:', req.body);

        const newProduct = await Product.create({
            title,
            price,
            description,
            image,
            category
        });

        console.log('Product created successfully:', newProduct.toJSON());

        res.status(201).json({
            message: "Product added successfully!",
            newProduct
        });

    } catch (err) {
        console.error('Product creation error:', err);

        res.status(500).json({
            error: err.message
        });
    }
});


// Delete product by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({
                error: "Product not found!"
            });
        }

        await product.destroy();

        res.json({
            message: "Product deleted successfully!"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});


module.exports = router;


