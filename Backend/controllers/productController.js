const productModal = require('../models/product');
const fs = require('fs');
const path = require('path');

const dirpath = "C:\\Users\\uppal\\OneDrive\\Desktop\\scutiades\\test1\\Backend";

async function deleteFile(filePath) {
    try {
      await fs.unlink(filePath);
      console.log(`File deleted successfully: ${filePath}`);
      return true;
    } catch (err) {
      console.error(`Error deleting file: ${err}`);
      return false;
    }
  }




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
        const product = await productModal.findById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        // If there's a new image, handle the old image deletion and update with the new one
        if (req.file) {
            const oldImagePath = path.join( dirpath, product.image);
            console.log(oldImagePath);

            deleteFile(oldImagePath).then(result => {
                if (result) {
                  console.log('File deletion was successful');
                } else {
                  console.log('File deletion failed');
                }
              });

            // Update the product data with the new image path
            productData.image = `/uploads/products/${req.file.filename}`;
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
      const product = await productModal.findById(req.params.id);
      if (!product) {
        return res.status(404).send('Product not found');
      }
  
      // Delete the image file from the file system
      const imagePath = path.join(dirpath, product.image);
      const x = deleteFile(imagePath);
        console.log(x);
      // Delete the product from the database
      await productModal.findByIdAndDelete(req.params.id);
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
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