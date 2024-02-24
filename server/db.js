const mongoose = require('mongoose');
require("dotenv").config();
const dbURL = process.env.MONGO_URL
const mongoConnect = async () => {
    try {
        await mongoose.connect(dbURL).then(console.log("connected"))
        //to connect with monggose db
        console.log("connected")
        const Items = await mongoose.connection.db.collection("items")
        const Items_array =await Items.find({}).toArray()
        if (!Items_array) { console.log("Could no retrive data for food items") } else {
            global.items = Items_array
            
        }

        //fetching data in collection

        const Category = await mongoose.connection.db.collection("categories")
        const Category_array = await Category.find({}).toArray();
        if (!Category_array) { console.log("Could no retrive data for food category") } else {
            global.categories = Category_array
            
        }
        console.log("Fetch Passed")
       
    } catch (error) {
        console.log("Problem while connecting to db", error)
    }

}




module.exports = mongoConnect;