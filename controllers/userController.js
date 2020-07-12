const User = require('../models/User');
const constants = require('../constants/appConstans');

exports.addUser = (request,response,next)=>{
    const userData = request.body;

    User.create(userData,(err,user)=>{
        if(err){
            next({'msg':constants.COMMON_ERROR});
        }else{
            return response.send({'status':200,'msg':constants.USER_REGISTERED});
        }
    });
}