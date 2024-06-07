const mongoose = require("mongoose");


const appoinmentSchema = new mongoose.Schema({
    property : {type : mongoose.Schema.Types.ObjectId , ref : "property"},
    user : {type : mongoose.Schema.Types.ObjectId , ref : "user"},
    status : {type : String ,
        enum : ["scheduled", "completed", "canceled"] 
    },
    date : Date ,
})


const AppoinmentSchema = mongoose.model("appoinment" , appoinmentSchema);

module.exports = AppoinmentSchema ;