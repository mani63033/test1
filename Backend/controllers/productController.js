const productModal = require('../models/product');


async function getProducts(req, res) {
    try {
        const products = await productModal.find({});
        res.status(200).json(products);
    } catch (err) {
        console.error('Error in getProducts controller:', err);
        res.status(500).send('Internal server error');
    }
}

async function postProduct(req, res) {
    try {
        const product = new productModal(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        console.error('Error in postProduct controller:', err);
        res.status(500).send('Internal server error');
    }
}


async function updateProduct(req, res) {
    try {
        const product = await productModal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).json(product);
    }
    catch (err) {
        console.error('Error in updateProduct controller:', err);
        res.status(500).send('Internal server error');
    }
}

async function deleteProduct(req, res) {
    try {
        const product = await productModal.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).json(product);
    }
    catch (err) {
        console.error('Error in deleteProduct controller:', err);
        res.status(500).send('Internal server error');
    }
}


module.exports = {
    getProducts,
    postProduct,
    updateProduct,
    deleteProduct
};