const express = require("express");
const Information = require("../models/information");
const router = express.Router();

router.post("", (req,res,next)=>{
    const information = new Information({
        name: req.body.name,
        email: req.body.email
    })
    information.save().then(createdInformation =>{
        res.status(200).json({
            information:{
                ...createdInformation,
                id : createdInformation._id
            }
        })
    })
})
router.get("",(req,res)=>{
    Information.find().then(data=>{
        res.status(200).json({
            information: data
        })
    })
})

module.exports = router