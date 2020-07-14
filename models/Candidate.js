const mongoose = require('mongoose');

const schema = mongoose.Schema({
    candidateId:{
        type:String
    },
    candidateName:{
        type:String
    },
    location:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Locations'
    },
    gender:{
        type:String
    },
    voteCount:{
        type:Number,
        default:0
    },
    userType:{
        type:String,
        default:'C'
    }
});

module.exports = mongoose.model('Candidates',schema);