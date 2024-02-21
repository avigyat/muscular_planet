const mongoose = require('mongoose');
require("dotenv").config();
const dbURL = process.env.MONGO_URL
const mongoConnect = async () => {
    try {
        await mongoose.connect(dbURL).then(console.log("connected"))
        //to connect with monggose db
       
    } catch (error) {
        console.log("Problem while connecting to db", error)
    }

}




module.exports = mongoConnect;