const mongoose = require("mongoose");

const plm = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
    name : String ,
    email : String ,
    password : String ,
    rols : {type : String ,
        enum : ["buyer" , "saller" , "agent"]
    },
})

userSchema.plugin(plm ,{ usernameField: "email" });

const User = mongoose.model("user" , userSchema);

module.exports = User ;