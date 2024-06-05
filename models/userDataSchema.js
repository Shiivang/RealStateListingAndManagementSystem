const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name : String ,
    email : String ,
    password : String ,
    rols : {type : String ,
        enum : ["buyer" , "saller" , "agent"]
    },
})


const User = mongoose.model("user" , userSchema);

module.exports = User ;