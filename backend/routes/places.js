const express = require("express");
const Place = require("../models/place");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage({
    destination: function( req,file,cb){
        cb(null, "");
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + file.originalname);
    }
});
const upload = multer({storage: storage});

router.get("/:country",(req,res,next)=>{
    Place.find({country:req.params.country}).then(documents=>{
        res.status(200).json({
            places: documents
        })
    }).catch(err=>console.log(err));

})
router.post("/addPlace", upload.single("image"), (req,res)=>{
    console.log(req.body.name);
    let place = new Place({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        state: req.body.state,
        country: req.body.country,
        image: {data: req.file.buffer, contentType: req.file.mimetype}
    });
    place.save().then(result=>{
        res.status(200).json({message:"Add place successfully"});
    })
})
module.exports = router;