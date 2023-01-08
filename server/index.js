import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import md5 from 'md5';
dotenv.config();

import User from './models/User.js';
import FoodItem from "./models/FoodItem.js";
import Table from './models/Table.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected To MongoDB🤝');
})

// api route start here

app.post('/signup', async (req, res) => {
    const { name, phone, email, password, role } = req.body;

    // validation to check all fileld are filled

    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');

    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(',')} are required`
        })
    }


    // validation to check if email already exists 

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }

    // validation to check if phone already exists

    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists"
        })
    }

    const user = new User({
        name: name,
        phone: phone,
        email: email,
        password: md5(password),
        role: role
    })

    const savedUser = await user.save();

    res.json({
        success: true,
        message: "User Created Successfully",
        data: savedUser
    })
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    let errorMessage = []

    if (!email) errorMessage.push("Email cannot be empty")
    if (!password) errorMessage.push("Password cannot be empty")

    if (errorMessage.length) {
        return res.json({
            success: false,
            message: errorMessage.toString()
        });
    }

    const existingUser = await User.findOne({
        email,
        password: md5(password)
    });

    res.json({
        success: existingUser ? true : false,
        message: existingUser ? "Login Successfully!" : "Wrong Credential!",
        data: existingUser
    })
})

app.post('/createFoodItem', async (req, res) => {
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
})

app.get('/foodItemByCategory', async (req, res) => {
    const { category } = req.query;

    const foodItems = await FoodItem.find({
        category: { $regex: category, $options: 'i' }
    })

    res.json({
        success: true,
        message: "Food Item Fetched Successfully",
        data: foodItems
    })
})

app.get('/foodItems', async (req, res) => {
    const { title } = req.query;

    const foodItems = await FoodItem.find({
        title: { $regex: title, $options: 'i' }
    })

    res.json({
        success: true,
        message: "Food Item Featched Successfully",
        data: foodItems
    })
})

app.post('/createTable', async (req, res) => {
    const { tableNumber } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });
    if (existingTable) {
        return res.json({
            success: false,
            message: "Table already exists"
        })
    }

    const table = new Table({
        tableNumber,
        booked: false
    })

    const savedTable = await table.save();

    res.json({
        success: true,
        message: "Table Created Successfully",
        data: savedTable
    })
})

app.post('/bookTable', async (req, res) => {
    const { tableNumber, userId } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });
    if (existingTable && existingTable.booked) {
        return res.json({
            success: false,
            message: "Table already occupied"
        })
    }

    if (existingTable) {
        existingTable.booked = true;
        existingTable.bookedBy = userId;
        await existingTable.save();
    }

    res.json({
        success: true,
        message: "Table Booked Successfully",
        data: existingTable
    })
})

app.post('/unBookTable', async (req, res) => {
    const { tableNumber } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });

    if (existingTable) {
        existingTable.booked = false;
        existingTable.bookedBy = null;
        await existingTable.save();
    }

    res.json({
        success: true,
        message: "Table unbooked successfully",
        data: existingTable
    })
})

app.get('/avilableTables', async(req,res) => {
    const avilableTables = await Table.find({ booked: false });
   
    res.json({
        success: true,
        message : "Avilable tables fetched successfully",
        data: avilableTables
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} ✈️`);
})