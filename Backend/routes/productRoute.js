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

productRouter.get('/',(req, res) => {
    productController.getProducts(req, res);
});

productRouter.get('/:id', (req, res) => {
    productController.getProduct(req, res);
});

productRouter.post('/', upload.single('image'), async (req, res) => {
    productController.postProduct(req, res);
});

productRouter.put('/:id',upload.single('image'), async (req, res) => {
    productController.updateProduct(req, res);
});

productRouter.delete('/:id', (req, res) => {
    productController.deleteProduct(req, res);
});

productRouter.post('/addcart', (req, res) => {
    productController.addToCart(req, res);
});

productRouter.get('/cart/:id', (req, res) => {
    productController.getCart(req, res);
});

productRouter.use('/uploads/products', express.static(path.join(__dirname, '../uploads/products')));

module.exports = productRouter;
