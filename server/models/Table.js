import { Schema, model } from "mongoose";

const tableSchema = new Schema({
    tableNumber:  { type: Number, require: [true, 'tableNumber cannot be empty'] },
    booked:  { type: Boolean, require: [true, 'booked cannot be empty'] },
    bookedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Table = model("Table", tableSchema);

export default Table;
