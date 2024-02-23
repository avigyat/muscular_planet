const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');


router.post("/createUser",
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Enter a valid password').isLength({ min: 6 }),
        body('username', 'Enter a valid username').isLength({ min: 3 })
    ]
    , async (req, res) => {
        try {
            const {username , email , password , location , address } = req.body;
            const errors = validationResult(req);
            //check for validation errors
            let success = false;
            if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array(), success }) }
            //importing salt and hash
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            console.log(req.body)
            const userNameCheck = await User.findOne({ username })
            const emailCheck = await User.findOne({ email })
            if (userNameCheck) return res.json({ msg: "username already exists", status: false })
            if (emailCheck) return res.json({ msg: "email already exists", status: false })
            const user = await User.create({
                username,
                email,
                password: secPass,
                location,
                address
                
            })
            console.log(user)
            res.json({ status: true , user})
        } catch (error) {
            res.json({ status: false})
            console.log(error)
        }
    })

    router.post("/loginUser",
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Enter a valid password').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            //check for validation errors
            if (!errors.isEmpty()) {
                let success = false
                return res.status(400).json({ errors: errors.array(), success })
            }

            const { email, password } = req.body;//destructuring request body

            let user = await User.findOne({ email });
            console.log(user)
            if (!user) {
                let success = false;
                return res.status(400).json({ error: "email does not exist", status: false  })
            }

            const passwordCompare = await bcrypt.compare(password, user.password)//returns boolean
            console.log(passwordCompare)

            if (!passwordCompare) {
                
                return res.status(400).json({ error: "Password did not match", status: false  })
            }
            
            // const data = {
            //     userdata: {
            //         id: user._id
            //     }
            // }

                // const authToken = jwt.sign(data, jwt_secret);
                // console.log(authToken);
                
                return res.json({  status: true, user })
            


        } catch (error) {
            
            
            return res.status(500).json({ "message": "some error occured", status: false })
        }
    })

module.exports = router;