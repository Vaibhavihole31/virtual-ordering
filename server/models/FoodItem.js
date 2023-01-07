import {Schema, model} from 'mongoose';

const foodItemSchema = new Schema({
    title: String,
    description : String,
    imagUrl : String,
    price : Number,
    catergory : String
})

const FoodItem = model("FoodItem", foodItemSchema)
export default FoodItem