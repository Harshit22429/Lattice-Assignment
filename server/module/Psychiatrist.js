const mongoose = require("mongoose");


const psychaitrist = new mongoose.Schema({  // name, hospitalId, email, password, patientCount
    name:{
        type:String,
        required:true
    },
    hospitalId:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    patientCount:{
        type:Number,
        required:true,
        default:0,
    }
})

const Psyc = mongoose.model("psychaitristSchema",psychaitrist );

module.exports = Psyc;