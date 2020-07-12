const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    aadharId:{
        type:Number,
        unique:true
    },
    age:{
        type:Number,
        min:18
    },
    dob:{
        type:Date
    },
    location:{
        type:Number
    },
    gender:{
        type:String
    },
    hasVoted:{
        type:Boolean
    }
});

module.exports = mongoose.model('User',schema);