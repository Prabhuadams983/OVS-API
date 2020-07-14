const Candidate = require('../models/Candidate');
const constants = require('../constants/appConstans');
const locationController = require('../controllers/locationController');
const userController = require('../controllers/userController');

exports.addCandidate = (request, response, next) => {
    const candidateData = request.body;

    Candidate.create(candidateData, (err, candidate) => {
        if (err) {
            next({ 'msg': constants.COMMON_ERROR });
        } else{
             locationController.updateLocation(candidate,response);
        }
    });
}

exports.addVote = (request,response,next)=>{
    const {id,aadharId} = request.body;

    Candidate.findOne({'candidateId':id},(err,candidate)=>{
        if(err){
            next({'msg':constants.COMMON_ERROR});
        }else{
            candidate.voteCount++;
            candidate.save((err,success)=>{
                if(err){
                    next({'msg':constants.COMMON_ERROR});
                }else{
                    userController.updateVoteFlag(aadharId,response,next);
                }
            })
        }
    })
}

exports.getResult = (request,response,next)=>{
    Candidate.find({})
             .populate('location')
             .sort({'voteCount':-1})
             .lean()
             .exec((err,success)=>{
                 if(err){
                     next({'msg':constants.COMMON_ERROR});
                 }else{
                     var results = success.map((obj)=>{
                        if(obj){
                            delete obj.location.candidates;
                            delete obj.location.voters;
                        }
                        return obj;
                     });
                     return response.send({'status':200,"results":results})
                 }
             })
}