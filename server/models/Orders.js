const mongoose = require('mongoose')

const {Schema}= mongoose;

const orderSchema = new Schema({
   
    email:{type:String,required: true,unique:true},
    order_data:{type:Array},
    

    
    
  });


  
  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;