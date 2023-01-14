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

export const foodItemByCategoryGet = async (req, res) => {
    const { category } = req.query;

    const foodItems = await FoodItem.find({
        category: { $regex: category, $options: 'i' }
    })

    res.json({
        success: true,
        message: "Food Item Fetched Successfully",
        data: foodItems
    })
}

export const foodItemByTitleGet = async (req, res) => {
    const { title } = req.query;

    const foodItems = await FoodItem.find({
        title: { $regex: title, $options: 'i' }
    })

    res.json({
        success: true,
        message: "Food Item Featched Successfully",
        data: foodItems
    })
}