const productModal = require('../models/product');
const fs = require('fs');
const path = require('path');

async function getProducts(req, res) {
    try {
        const products = await productModal.find();
        res.status(200).json(products);
    }
    catch (err) {
        console.error('Error in getProducts controller:', err);
        res.status(500).send('Internal server error');
    }
}

async function postProduct(req, res) {
    try {
        const products = new productModal({
            name: req.body.name,
            description: req.body.description,
            size: req.body.size,
            price: req.body.price,
            Discount: req.body.Discount,
            Aboutart: req.body.Aboutart,
            Paintingdescription: req.body.Paintingdescription,
            Termsandcondition: req.body.Termsandcondition,
            image: `/uploads/products/${req.file.filename}`,
            user: req.body.user
         
        });
        await products.save();
        res.status(201).json(products);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error creating image');
      }
}

async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const productData = req.body;

        // Find the product by ID
        const product = await productModal.findById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        // If there's a new image, handle the old image deletion and update with the new one
        if (req.file) {
            const oldImagePath = path.join(__dirname, '../uploads/products', product.image);

            // Delete the old image file
            fs.unlink(oldImagePath, (err) => {
                if (err) {
                    console.error('Error deleting old image:', err);
                }
            });

            // Update the product data with the new image path
            productData.image = req.file.filename;
        }

        // Update the product with new data
        const updatedProduct = await productModal.findByIdAndUpdate(id, productData, { new: true });

        res.status(200).json(updatedProduct);
    } catch (err) {
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