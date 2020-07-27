const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    emailId:{
        type:String,
        default:'admin@mailinator.com'
    },
    password:{
        type:String,
        default:'Welcome@123'
    }
});

module.exports = mongoose.model('Admin',adminSchema);