const mongoose = require('mongoose');

const SelectServ = mongoose.model('SelectServ', {
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
    },
    btnDescription: {
        type: String,
        required: true
    }
});

module.exports = SelectServ;