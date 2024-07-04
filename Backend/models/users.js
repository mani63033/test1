const connection = require('./connection');

const userSchema = new connection.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    phone : {
        type: Number,
        required: true
    },
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    }
});

const user = connection.model('user', userSchema);

module.exports = user;