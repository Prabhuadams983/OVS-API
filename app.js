const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./database/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/ovs/api",require('./routes/router'));

app.use(function(err,req,res,next){
    let status = err.status || 500;
    res.send({"status":status,'msg':err.msg});
});
app.listen(7781);

console.log("Express server is running on port 7781");