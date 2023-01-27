import ColdItem from "../models/ColdItem.js";

export const createColdItemPost = async (req, res) => {
    const { title, description, imgUrl, price, category } = req.body;

    const coldItem = new ColdItem({
        title,
        description,
        imgUrl,
        price,
        category
    })

    const savedcoldItem = await coldItem.save();

    res.json({
        success: true,
        message: "Food Item created Successfully!",
        data: savedcoldItem
    })
}

export const coldItemByCategoryGet = async (req, res) => {
    const { category } = req.query;

    const coldItems = await ColdItem.find({
        category: { $regex: category, $options: 'i' }
    })

    res.json({
        success: true,
        message: "Food Item Fetched Successfully",
        data: coldItems
    })
}

export const coldItemByTitleGet = async (req, res) => {
    const { title } = req.query;

    const coldItems = await ColdItem.find({
        title: { $regex: title, $options: 'i' }
    })

    res.json({
        success: true,
        message: "Food Item Featched Successfully",
        data: coldItems
    })
}

export const allColdItemGet = async(req, res)=>{
    const coldItems = await ColdItem.find()
  
    res.json({
        success: true,
        message: "Food Items fetched successfully",
        data: coldItems
    })
  }