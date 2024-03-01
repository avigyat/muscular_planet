const express = require('express');
const Order = require('../models/Orders');
const router = express.Router();
const instance = require('../index.js');


router.post('/checkout', async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
        }
        console.log("passed")
        const order = await instance.orders.create(options)
        console.log(order)
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
        });
    }
})

router.post('/paymentverification', async (req, res) => {
    console.log("payment verification reached")

    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Database comes here

            await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            });

            res.redirect(
                `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
            );
        } else {
            res.status(400).json({
                success: false,
            });
        }
    } catch (error) {
        res.send("Error: ", error.message)
    }
})

module.exports = router;