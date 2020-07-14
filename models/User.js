const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    aadharId:{
        type:Number
    },
    age:{
        type:Number,
        min:18
    },
    dob:{
        type:Date,
        default:Date.now()
    },
    location:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Locations'
    },
    gender:{
        type:String
    },
    hasVoted:{
        type:Boolean,
        default:false
    },
    userType:{
        type:String,
        default:'U'
    }
});

module.exports = mongoose.model('User',schema);