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
        const products = new productModal({
            name: req.body.name,
            description: req.body.description,
            size: req.body.size,
            price: req.body.price,
            Discount: req.body.Discount,
            Aboutart: req.body.Aboutart,
            Paintingdescription: req.body.Paintingdescription,
            Termsandcondition: req.body.Termsandcondition,
            image: `/uploads/${req.file.filename}`,
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