const mongoose = require("mongoose");

const connDB = async()=>{
    try {
        const connected = await mongoose.connect(process.env.URI);
        if(connected){
            console.log("Data base connected");
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connDB;