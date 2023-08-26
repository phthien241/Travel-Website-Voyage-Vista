const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const generateRandomKey = (length) => {
    return crypto.randomBytes(length).toString('hex');
};
const secrect_key = generateRandomKey(32);

router.post("", (req,res,next)=>{
    const {email, password} = req.body;
    User.findOne({email,password}).then(userValid=>{
        if(userValid){
            console.log(secrect_key+userValid.email);
            const token = jwt.sign({},secrect_key+userValid.email, {expiresIn:"10s"});
            res.status(200).json({message: "Login Successfully", userId: userValid.userId, token: token});
        }else{
            res.status(401).json({message: "Email or Password is incorrect"});
        }
    });
    
})

module.exports = router
