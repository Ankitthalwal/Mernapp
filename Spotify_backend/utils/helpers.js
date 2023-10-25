const jwt = require('jsonwebtoken');
//npm i jsonwebtoken
exports ={};
exports.getToken = async (email,user) =>{

const token = jwt.sign({identifier: user._id},"thisisbad");
return token;
};
module.exports=exports;




