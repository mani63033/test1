const express = require('express');

const productController = require('../controllers/productController');
const productRouter = express.Router();


productRouter.get('/', (req, res) => {
    productController.getProducts(req, res);
});

productRouter.post('/', (req, res) => {
    productController.postProduct(req, res);
});

productRouter.put('/:id', (req, res) => {
    productController.updateProduct(req, res);
});

productRouter.delete('/:id', (req, res) => {
    productController.deleteProduct(req, res);
});

module.exports = productRouter;