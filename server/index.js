
const express = require('express')
const app = express()
const mongoConnect = require('./db')
const Razorpay = require('razorpay');
require("dotenv").config();
const port = process.env.PORT
mongoConnect();

app.use(express.json())
//using cors
var cors = require('cors')
app.use(cors());

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Origin","http://localhost:4000/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})



var instance = new Razorpay({
  key_id: process.env.API_ID,
  key_secret: process.env.API_KEY,
});
module.exports = instance;


app.use('/api', require('./routes/createUser'))
app.use('/api/data', require('./routes/data'))
app.use('/history', require('./routes/order_data'))
app.use('/payments', require('./routes/payments'))
app.use('/orderHistory', require('./routes/orderHistory'))
app.get('/', function (req, res) {
    console.log("/user request called");
    res.send('Welcome to GeeksforGeeks');
});
app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
