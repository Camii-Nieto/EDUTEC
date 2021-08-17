const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
    name : {
        type: String,
        required: true        
        },
    description: {
        type: String,
        required: true
    },
    img: { 
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        required: true 
    },
    category: {
        type: String,
        required: true 
    }
});

module.exports = Product;