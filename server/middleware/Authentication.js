const jwt = require("jsonwebtoken");
const Psyc = require("../module/Psychiatrist")
const createError = require("http-errors");
const isAuth = async(req, res, next)=>{
    try {
        const {psychToken} = req.cookies;
        if(!psychToken){
            throw createError(400,'you are anauthorized for this request')
            // return res.status(400).json({message:"you are anauthorized for this request"})
        }
        const decoded = jwt.verify(psychToken, process.env.JWT_SECRET);
        const psycPresent = await Psyc.findById(decoded._id);
        
        if(psycPresent){
            req.psyc = psycPresent;
            next();
        }
    } catch (error) {
        next(error);    
    }
}

module.exports = isAuth;