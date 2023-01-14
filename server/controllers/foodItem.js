import FoodItem from "./../models/FoodItem.js";

export const createFoodItemPost = async (req, res) => {
    const { title, description, imgUrl, price, category } = req.body;

    const foodItem = new FoodItem({
        title,
        description,
        imgUrl,
        price,
        category
    })

    const savedFoodItem = await foodItem.save();

    res.json({
        success: true,
        message: "Food Item created Successfully!",
        data: savedFoodItem
    })
}