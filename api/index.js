const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

dotenv.config()


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection successful")).
    catch((err) => console.log(err));


// app.get("/api/test", () => {
//     console.log("Test successful")
// })

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(5000, () => {
    console.log("server running on port 5000")
})