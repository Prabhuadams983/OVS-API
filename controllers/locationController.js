const Location = require('../models/Location');
const constants = require('../constants/appConstans');
const User = require('../models/User');

exports.addLocation = (request,response,next)=>{
    const locationData = request.body;

    Location.create(locationData,(err,success)=>{
        if(err){
            next({'msg':constants.COMMON_ERROR});
        }else{
            return response.send({'status':200,'locations':success});
        }
    });
}

exports.updateLocation = (document,response)=>{
    Location.findOne({'_id':document.location},(err,locationDoc)=>{
        if(err){
            next({ 'msg': constants.COMMON_ERROR });
        }else{
            if(document.userType == 'C'){
                locationDoc.candidates.push(document._id);
            }else{
                locationDoc.voters.push(document._id);
            }
            Location.update({"_id":locationDoc._id},locationDoc,(err,success)=>{
                if(err){
                    next({'msg':constants.COMMON_ERROR});
                }else{
                    if(document.userType == 'C'){
                        return response.send({'status':200,'msg':constants.CANDIDATE_ADDED});
                    }else{
                        return response.send({'status':200,'msg':constants.USER_REGISTERED});
                    }
                }
            });
        }
    });
}

exports.populateCandidates = (user,response,next)=>{
    User.findOne({'_id':user._id})
        .populate('location')
        .exec((err,user)=>{
            if(err){
                next({"msg":constants.COMMON_ERROR});
            }else{
                user.populate('location.candidates')
                        .execPopulate()
                        .then((doc)=>{
                            return response.send(doc);
                        })
                        .catch(err => next({'msg':constants.COMMON_ERROR}));
            }
        });
}