const express = require('express');
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');
const productRouter = express.Router();
const authenticateToken = require('../authenticateToken');

const storage = multer.diskStorage({
    destination: './uploads/products',
    filename: (req, file, cb) => {
        const sanitizedOriginalName = file.originalname.replace(/\s+/g, '_'); // Replace spaces with underscores
        cb(null, `${Date.now()}-${sanitizedOriginalName}`);
    }
});

const upload = multer({ storage: storage });

productRouter.get('/', (req, res) => {
    productController.getProducts(req, res);
});

productRouter.post('/', upload.single('image'), async (req, res) => {
    productController.postProduct(req, res);
});

productRouter.put('/:id',authenticateToken, (req, res) => {
    productController.updateProduct(req, res);
});

productRouter.delete('/:id',authenticateToken, (req, res) => {
    productController.deleteProduct(req, res);
});

productRouter.use('/uploads/products', express.static('uploads'));

module.exports = productRouter;
