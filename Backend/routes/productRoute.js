const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('../models/connection');
const productController = require('../controllers/productController');
const productRouter = express.Router();


productRouter.get('/', (req, res) => {
    productController.getProducts(req, res);
});


// Set up multer to store images in the 'uploads' folder
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });


// POST a new image
productRouter.post('/', upload.single('image'), async (req, res) => {
    productController.postProduct(req, res);
});

// Serve the images folder as a static directory
productRouter.use('/uploads', express.static('uploads'));


productRouter.put('/:id', (req, res) => {
    productController.updateProduct(req, res);
});

productRouter.delete('/:id', (req, res) => {
    productController.deleteProduct(req, res);
});

module.exports = productRouter;