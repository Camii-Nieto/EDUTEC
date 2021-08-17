const mongoose = require('mongoose');

const SlideME = mongoose.model('SlideME', {
    img: { 
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        required: true 
    }
});

module.exports = SlideME;