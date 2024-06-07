var express = require('express');
var router = express.Router();

const Appoinment = require("../models/appoinment");
const {isLoggedIn} = require("../utility/auth");


function verifyrole (req,res,next){
    if(req.user.rols == "buyer"){
        next();
    }else{
        res.send("kharide ne wala");
    }
}


/* GET home page. */
router.post('/:propartyId', isLoggedIn, verifyrole ,async function(req, res, next) {
 try {
    const newAppoinment =new Appoinment({
        ...req.body,
        user : req.user._id,
        property : req.params.propartyId
    });
    await newAppoinment.save();
    res.send("tab milenge !")

 } catch (error) {
    res.send(error);
 }
});

module.exports = router;
