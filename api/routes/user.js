const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
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

//delete user method
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("User has been deleted");
    } catch (err) {
        return res.status(500).json(err);p
    }
})

//get user method
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        return res.status(200).json(others);
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