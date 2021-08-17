const mongoose = require('mongoose');

const Service = mongoose.model('Service', {
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
    page: {
        type: String,
        required: true 
    }
});

module.exports = Service;