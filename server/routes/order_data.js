const express = require('express');
const Order = require('../models/Orders');
const router = express.Router();

router.post("/orderData",
    async (req, res) => {
        let data = req.body.data
        await data.splice(0, 0, { order_date: req.body.order_date })
        let eID = await Order.findOne({ 'email': req.body.email })
        if (eID === null) {
            try {
                await Order.create({
                    email: req.body.email,
                    order_data: [data],

                }).then(() => { return res.json({ 'success': 'true' }).status(200) })

            } catch (error) {
                return res.json({ 'serever Error': error.message }.status(400))
            }
        } else {
            try {
                await Order.findOneAndUpdate(
                    { email: req.body.email },
                    { $push: { order_data: data } })
                    .then(() => { return res.json({ 'success': 'true' }) })

            } catch (error) {
                return res.json({ 'serever Error': error.message })
            }
        }
    }
)



module.exports = router;