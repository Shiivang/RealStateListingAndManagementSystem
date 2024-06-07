const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGO_URL).then(()=> {
//     console.log("connected");
// }).catch(
//     (err)=>{
//         console.log(err.message);
//     }
// );


mongoose.connect("mongodb://0.0.0.0/real").then(()=> {
    console.log("connected");
}).catch(
    (err)=>{
        console.log(err.message);
    }
);