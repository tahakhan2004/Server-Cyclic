const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone_Num:{
        type: String,
        required: true,
    },
    Created_on:{
        type: Date,
        default : Date.now,
    },
})
 
const userModel = mongoose.model("User" ,Schema);
module.exports = userModel; 