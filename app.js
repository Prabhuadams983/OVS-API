require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./database/db');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/public/image',express.static('public/image'));
app.use("/ovs/api",require('./routes/router'));

app.use(function(err,req,res,next){
    let status = err.status || 500;
    res.status(status).send({"status":status,'msg':err.msg});
});
app.listen(7781);

console.log("Express server is running on port 7781");