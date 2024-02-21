const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');


router.post("/createUser",
[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 6 }),
    body('name', 'Enter a valid name').isLength({ min: 3 })
]
, async(req,res)=>{    
    const errors = validationResult(req);
        //check for validation errors
        let success = false;
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array(),success }) }
        //importing salt and hash
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
       
try {
    console.log(req.body)
    await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass,
        location:req.body.location,
        address:req.body.address
    })
    res.json({'success':'true'})
} catch (error) {
    res.json({'success':'false'})
    console.log(error)
}
})

module.exports = router;