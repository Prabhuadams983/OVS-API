const Location = require('../models/Location');
const constants = require('../constants/appConstans');

exports.addLocation = (request,response,next)=>{
    const locationData = request.body;

    Location.create(locationData,(err,success)=>{
        if(err){
            next({'msg':constants.COMMON_ERROR});
        }else{
            return response.send({'status':200,'msg':constants.LOCATION_ADDED});
        }
    });
}

exports.updateLocation = (candidate,response)=>{
    Location.findOne({'_id':candidate.location},(err,locationDoc)=>{
        if(err){
            next({ 'msg': constants.COMMON_ERROR });
        }else{
            locationDoc.candidates.push(candidate._id);
            Location.update({"_id":locationDoc._id},locationDoc,(err,success)=>{
                if(err){
                    next({'msg':constants.COMMON_ERROR});
                }else{
                    return response.send({'status':200,'msg':constants.CANDIDATE_ADDED});
                }
            });
        }
    });
}