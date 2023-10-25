

//now make the Authorization page
const express = require('express');
const router= express.Router();
const User = require("../Model1/User");
const {getToken} = require('../utils/helper1');
const bycrpt1 = require('bcrypt');
router.post('/register', async (req,res)=>{

    const {firstName,lastName,email,username,password}= req.body;
 //check user is already exist or not if yes then
    const user = await User.findOne({email:email});
    if(user){
        return res.status(403).json({Error:"A user with this email is already access"});
    }

    //if not then add it to db
    const hashpassword =await  bycrpt1.hash(password, 10);
    const newuserdata = {email,password:hashpassword,firstName,lastName,username};
    const newUser = await User.create(newuserdata);

    //ext step create a token for user
    const token = await getToken(user,newUser);
    const usertokenreturn = { ...newUser.toJSON(), token };//userdetails,token
    delete usertokenreturn.password;//delete hashpassword for security purpose
    return res.status(200).json(usertokenreturn);

})

//next step make a login page
router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email:email});
    if(!user){
        return res.status(403).json({error:"Invalid credentials"});
    }
    const  isPasswordvalid= await bycrpt1.compare(password,user.password);
    if(!isPasswordvalid){
        return res.status(403).json({error:"Invalid credentials"});
    }

    
//step4 if the credentials are correct return the user a token
const token = await getToken(user.email,user)
const usertokenreturn = { ...user.toJSON(), token };
delete usertokenreturn.password;
return res.status(200).json(usertokenreturn);
     
})
module.exports = router;

  