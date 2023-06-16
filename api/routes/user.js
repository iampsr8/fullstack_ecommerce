const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const CryptoJS = require("crypto-js")

const router = require("express").Router();


//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.PASS_KEY).toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set:req.body
        }, { new: true })
        return res.status(200).json(updatedUser)
    } catch (err) {
        return res.status(500).json(err);
    }
})


module.exports = router



// router.get("/usertest", (req, res) => {
//     res.send("user test is successful")
// });

// router.post("/userposttest", (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     res.send("your username is " + username)
// });