const mongoose = require('mongoose');

const schema = mongoose.Schema({
    locationName: {
        type: String
    },
    locationId:{
        type:Number,
        unique:true
    },
    candidates: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Candidates'
        }
    ]
});

module.exports = mongoose.model('Locations', schema);