const Candidate = require('../models/Candidate');
const constants = require('../constants/appConstans');
const locationController = require('../controllers/locationController');
const { report } = require('../routes/router');

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