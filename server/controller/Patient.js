const Auth = require("../middleware/Authentication");
const createError = require("http-errors")
const patientSchema = require("../module/Patient");
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const Psyc = require("../module/Psychiatrist");


const registerPatient = async (req, res, next) => {
    try {
        const { name, address, email, phone, password, photo } = req.body;
        if (!name, !address, !email, !phone, !password) {
            throw createError(400,'all fields are required')
        }
        const storage = multer.memoryStorage(); // Store files in memory as buffers
        const upload = multer({ storage: storage });
        upload.single(photo);
        const newPatient = new patientSchema({name, address, email , phone, password, photo});
        await Psyc.findOneAndUpdate({email: req.psyc.email}, {$set:{patientCount:req.psyc.patientCount+1}});
        await newPatient.save();
        
        return res.status(200).json({
            message:"Patient successfully registered"
        });
    } catch (error) {
        next(error);
    }
}


module.exports = { registerPatient };