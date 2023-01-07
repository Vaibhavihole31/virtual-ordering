import { Schema, model } from 'mongoose';

const foodItemSchema = new Schema({
    title: { type: String, require: [true, 'title cannot be empty'] },
    description: { type: String, require: [true, 'description cannot be empty'] },
    imgUrl: { type: String, require: [true, 'image url cannot be empty'] },
    price: { type: Number, require: [true, 'price cannot be empty'] },
    category: { type: String, require: [true, 'catergory cannot be empty'] },
})

const FoodItem = model("FoodItem", foodItemSchema)
export default FoodItem