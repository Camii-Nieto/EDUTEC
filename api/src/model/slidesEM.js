const mongoose = require('mongoose');

const SlideEM = mongoose.model('SlideEM', {
    img: { 
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        required: true 
    }
});

module.exports = SlideEM;