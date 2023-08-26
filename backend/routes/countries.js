const express = require("express");
const multer = require("multer");
const Country = require("../models/country");
const router = express.Router();
const fs = require('fs');


const storage = multer.memoryStorage({
    destination: function( req,file,cb){
        cb(null, "haha");
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + file.originalname);
    }
});
const upload = multer({storage: storage});
router.get("",(req,res,next)=>{
    const countryQuery = Country.find();
    countryQuery.then(documents=>{
        res.status(200).json({
            countries: documents
        })
    })
})

router.get("/:continent",(req,res,next)=>{      
    Country.find({continent:req.params.continent}).then(documents=>{  
        res.status(200).json({
            countries: documents
        })
    }).catch(err=>console.log(err));
}
)

router.post("/addCountry", upload.single("image"), (req,res)=>{
    
    const {mimetype, buffer} = req.file;
    let country = new Country({
        name: req.body.name,
        continent: req.body.continent,
        description: req.body.description,
        image: {data: req.file.buffer, contentType: req.file.mimetype}
    });
    // country.name = req.body.name;
    // country.continent = req.body.continent;
    // country.description = req.body.description;
    // country.imagePath = req.file.path;
    country.save().then(result=>{
        res.status(200).json({message: "haha"});
    })
})



module.exports = router