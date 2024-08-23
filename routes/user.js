var express = require('express');
var router = express.Router();

const User = require("../models/userDataSchema");
const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.use(User.createStrategy());

const {isLoggedIn} = require("../utility/auth");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("homepage");
});

router.post("/current", isLoggedIn, function (req, res, next) {
  res.send(req.user);
});

router.post('/register' , async (req,res,next)=>{
  try {
    const { name , email , password , rols } = req.body ;  
    const newUser = new User({
      name , email, rols 
    }) ;
    await User.register(newUser , password);
    res.send("user regiseterx") ;
  } catch (error) {
    res.send(error);
  }
});

router.post("/login" ,passport.authenticate("local") ,async (req,res)=>{
 res.send("logged in");
});

router.get("/logout" , (req,res)=> {
  req.logOut(()=>{
    res.send("nikal bhar");
  })
})

module.exports = router;
