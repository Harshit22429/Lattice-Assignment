const express = require("express");
const { registerPatient } = require("../controller/Patient");
const {registerPsychaitrists, loginPsychaitrists, logoutPsychaitrists, getAllPsychaitrists} = require("../controller/Psychiatrist");
const isAuth = require("../middleware/Authentication");
const validatePatientDetails = require("../middleware/Validation");
const userRoute = express.Router();

userRoute.route("/patientRegister").post(isAuth,validatePatientDetails,registerPatient);        //  http://localhost:3000/main/v1/patientRegister
userRoute.route("/psychaitristRegister").post(registerPsychaitrists);    //  http://localhost:3000/main/v1/psychaitristRegister
userRoute.route("/psychaitristLogin").post( loginPsychaitrists);         //  http://localhost:3000/main/v1/psychaitristLogin
userRoute.route("/psychaitristLogout").get( logoutPsychaitrists);        //  http://localhost:3000/main/v1/psychaitristLogout

userRoute.route("/getPsychaitrists/:id").get(getAllPsychaitrists);       // http://localhost:3000/main/v1//getPsychaitrists/:id

module.exports = userRoute;