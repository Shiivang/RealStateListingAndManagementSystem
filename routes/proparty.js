var express = require('express');
var router = express.Router();

const proparty = require("../models/propertySchema");
const upload = require("../utility/multer");
const {isLoggedIn} = require("../utility/auth");


function verifyrole (req,res,next){
    if(req.user.rols == "saller"){
        next();
    }else{
        res.send("teri he kiya proparty ?")
    }
}


/* GET home page. */
router.post('/', isLoggedIn, verifyrole ,upload.single("image"),async function(req, res, next) {
 try {
    const newproparty =new proparty({
        ...req.body,
        image : req.file.filename ,
        owner : req.user._id,
    });
    await newproparty.save();
    res.send("ha bnnadi proparty!")

 } catch (error) {
    res.send(error);
 }
});

module.exports = router;
