const router = require('express').Router();
const userController = require('../controllers/userController');
const userValidate = require('../middlewares/validator');
const locationController = require('../controllers/locationController');
const candidateController = require('../controllers/candidateController');

router.post('/addUser',userValidate.checkIfUserExists,userController.addUser);

router.post("/addLocation",userValidate.checkIfLocationExists,locationController.addLocation);

router.post("/addCandidate",userValidate.checkIfCandidateExists,candidateController.addCandidate);

router.get('/getUser',userController.getUser);

router.put('/addVote',candidateController.addVote);

router.get('/result',candidateController.getResult);

module.exports=router;