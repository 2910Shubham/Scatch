const mongoose = require('mongoose');


const ownerSchema = mongoose.Schema({

    name: {
        type: String,
        minlength: 3,
        trim: 3,

    },
    email: String,
    password: String,
    
    products : {
        type: Array,
        default: [],
    },
    gstin: String,
    image: String,
});
 
module.exports = mongoose.model('owner', ownerSchema);