const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ovs",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let db = mongoose.connection;

db.once('open',()=>console.log("Connected to MongoDB"));

db.on('error',(err)=>console.log(err));
