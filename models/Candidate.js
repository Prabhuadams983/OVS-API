const mongoose = require('mongoose');

const schema = mongoose.Schema({
    candidateId:{
        type:String
    },
    name:{
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
        type:Number
    }
});

module.exports = mongoose.model('Candidates',schema);