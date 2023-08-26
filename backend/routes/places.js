const express = require("express");
const Place = require("../models/place");
const router = express.Router();

router.get("/:country",(req,res,next)=>{
    console.log(req.params.country);
    Place.find({country:req.params.country}).then(documents=>{
        res.status(200).json({
            places: documents
        })
    }).catch(err=>console.log(err));

})
module.exports = router;