const connection = require('./connection');

const productSchema = new connection.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    Discount: {
        type: Number,
        required: true
    },
    Aboutart: {
        type: String,
        required: true
    },
    Paintingdescription: {
        type: String,
        required: true
    },
    Termsandcondition: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: Number,
        required: true
    }
});

const product = connection.model('product', productSchema);

module.exports = product;
