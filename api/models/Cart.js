const mongoose=require("mongoose")


const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String },
                quantity:{type:Number,defalt:1}
            }
        ]
    },
    {timestamps:true}
)

module.exports = mongoose.model("Cart", CartSchema);