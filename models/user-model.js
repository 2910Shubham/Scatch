const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    name: {
        type: String,
        minlength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    order: {
        type: Array,
        default: [],
    },
    contact: Number,
    image: String,
});
 
module.exports = mongoose.model('user', userSchema);