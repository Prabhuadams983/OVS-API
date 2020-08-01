const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const key = crypto.randomBytes(32).toString('hex');
process.env.ACCESS_TOKEN_KEY = key;

exports.generateJWT = (user) =>{

}
