import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    orderId: { type: String, require: [true, 'orderId cannot be empty'] },
    tableNumber: { type: Number, require: [true, 'table Number cannot be empty'] },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        name: { type: String, require: [true, 'item name cannot be empty'] },
        price: { type: Number, require: [true, 'price cannot be empty'] },
        quantity: { type: Number, require: [true, 'quantity cannot be empty'] },
    }]
})

const Order = model("Order", orderSchema);

export default Order;