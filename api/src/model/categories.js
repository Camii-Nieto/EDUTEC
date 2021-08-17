const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
    name : {
        type: String,
        required: true        
        },
    page: {
        type: String,
        required: true 
    }
});

module.exports = Category;