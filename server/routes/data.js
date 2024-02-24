const express = require('express');
const router = express.Router();

router.post("/info",
    async (req, res) => {
        try {
            console.log("data sent")
            return res.send([global.items,global.categories])

        } catch (error) {
            return res.json({ status: false })
        }

    })


module.exports = router;