const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt=require("jsonwebtoken")

//Register
router.post("/register", async (req, res) => {
    const newUser = User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_KEY).toString()
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})


//login

router.post("/login", async (req, res) => {
    try {
        //finding the user with that particular username using the findOne method
        const user = await User.findOne({ username: req.body.username });

        //return error if user is not found
        if (!user) {
            return res.status(401).json("Wrong credentials")
        }

        //finding password from the user json object in the db
        const hashedPassword=CryptoJS.AES.decrypt(user.password,process.env.PASS_KEY)
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        
        //return error is password from db and entered password does not match
        if (Originalpassword !== req.body.password) {
            return res.status(401).json("Wrong Password")
        }


        //jwt user authentication
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_KEY,
            {expiresIn:"3d"}
        );

        //if everything is find return the user with status code 200 all OK

        //i don't want to send the password to the user only the other information, i'm gonna use the spread
        //operator to separate the password and the other information
        const { password, ...others } = user._doc;  //user info is stored inside _doc in mongodb
        return res.status(200).json({...others,accessToken});

    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router