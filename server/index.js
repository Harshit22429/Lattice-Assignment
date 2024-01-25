const express = require("express");
const dotenv = require('dotenv');
const connDB = require("./dbConn");
const userRoute = require("./routes/routes")
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const app = express();

dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;

connDB();

app.use(cookieParser());
app.use(express.json());  // use for accessing json data and destructure it
app.use("/main/v1", userRoute);  
app.use(errorHandler);
app.listen(PORT, ()=>{
    console.log(`Lattice assignment server running on http://localhost:${PORT}/main`);
})
