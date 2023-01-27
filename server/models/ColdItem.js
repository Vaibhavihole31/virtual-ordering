import { Schema, model } from 'mongoose';

const coldItemSchema = new Schema({
    title: { type: String, require: [true, 'title cannot be empty'] },
    description: { type: String, require: [true, 'description cannot be empty'] },
    imgUrl: { type: String, require: [true, 'image url cannot be empty'] },
    price: { type: Number, require: [true, 'price cannot be empty'] },
    category: { type: String, require: [true, 'catergory cannot be empty'] },
})

const ColdItem = model("ColdItem", coldItemSchema)
export default ColdItem