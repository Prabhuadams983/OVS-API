const constants = require('../constants/appConstans');
const Admin = require('../models/Admin');

exports.loginAdmin = (request,response,next)=>{
    const {emailId,password} = request.body;
    Admin.findOne({'emailId':emailId,'password':password})
        .then((doc)=>{
            if(doc.emailId == 'admin@mailinator.com' && doc.password == 'Welcome@123')
            return response.send({'status':200});
        })
        .catch((err) => {next({'msg':constants.COMMON_ERROR})});
}