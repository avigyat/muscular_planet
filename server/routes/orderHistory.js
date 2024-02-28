const express = require('express');
const Order = require('../models/Orders');
const router = express.Router();


router.post('/myOrderData',async (req,res)=>{
    try{
        console.log("my order email: ",req.body.email)
        let myData= await Order.findOne({"email":req.body.email});
        console.log(res.json)
        return res.json({order_data:myData})
        
    }catch(error){
       return res.send("Error: ",error.message)
    }
})

module.exports = router;