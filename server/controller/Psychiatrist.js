const Psyc = require("../module/Psychiatrist");
const bcrypt = require("bcryptjs");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const registerPsychaitrists = async (req, res,next) => {
    try {
        const { name, hospitalId, email, password } = req.body;
        if (!name, !hospitalId, !email, !password) {
            throw createError(400, 'all field mandatory');
        }
        if (hospitalId == "AH" || hospitalId == "JNMCH" || hospitalId == "IGIMS" || hospitalId == "AIIMS") { //JNMCH

            // const pwd = jwt.sign({password}, process.env.JWT_SECRET);
            const pwd = await bcrypt.hash(password, 10);

            const newPsychaitrist = new Psyc({
                name,
                hospitalId,
                email,
                password: pwd
            });

            await newPsychaitrist.save();
            return res.status(200).json({ message: "Psychaitrist register successfully." });
        } else {
            throw createError(400, 'Please provide a valid hospital id');

        }
    } catch (error) {
        next(error);
    }
}

const loginPsychaitrists = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email, !password) {
            throw createError(400, 'all fields are mandatory');
        }
        const psyc = await Psyc.findOne({ email });
        if(!psyc){
            throw createError(400, 'incorrect credentials');
        }
        
        const verifyPassword = await bcrypt.compare(password, psyc.password);
        if (verifyPassword) {
            const psychToken = jwt.sign({ _id: psyc._id }, process.env.JWT_SECRET);

            return res.status(200).cookie("psychToken", psychToken, {
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 7)
            }).json({
                message: "Logged in successfully",
                Token: psychToken
            });
        } else {
            throw createError(400, 'Invalid user and password');
        }
    } catch (error) {
        next(error);
    }
}
const logoutPsychaitrists = async (req, res, next) => {
    try {
        const { psychToken } = req.cookies;
        if (psychToken) {
            res.clearCookie("psychToken");
            return res.status(200).json({ message: "Psychaitrist logout successfully " });
        } else {
            throw createError(400, 'Psychaitrist not loged in');
        }
    } catch (error) {
        next(error);
    }
}

const getAllPsychaitrists = async (req, res,next) => {
    try {
        const hospitalId = req.params.id;
        if (!hospitalId) {
            throw createError(400, 'you have to pass hospital Id');
        }
        const allPsych = await Psyc.find({ hospitalId }).select("-email -password -__v");

        //using id fetching hospital name
        const hospitalIdMapping = [
            { hid: "AH", hname: 'Apollo Hospitals' },
            { hid: "JNMCH", hname: 'Jawaharlal Nehru Medical College and Hospita' },
            { hid: "IGIMS", hname: 'Indira Gandhi Institute of Medical Sciences (IGIMS)' },
            { hid: "AIIMS", hname: 'AIIMS - All India Institute Of Medical Science' }
        ];

        const Hospital = hospitalIdMapping.find((e) => e.hid == hospitalId);

        let totalPatient = 0;
        allPsych.map((e) => { totalPatient += e.patientCount });

        const result = {
            hospital_name: Hospital.hname,
            total_psych: allPsych.length,
            total_patient: totalPatient,
            psychaitrist_details: allPsych
        }
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
    }
}
module.exports = { registerPsychaitrists, loginPsychaitrists, logoutPsychaitrists, getAllPsychaitrists };