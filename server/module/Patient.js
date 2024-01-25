const mongoose = require("mongoose");

const patient = new mongoose.Schema({  // name, address, email, phone, password, photo
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:Buffer,
    }
})
const patientSchema = mongoose.model("patientSchema", patient);
module.exports = patientSchema;