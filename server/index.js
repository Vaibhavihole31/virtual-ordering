import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import User from './models/User.js'

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
        password: password,
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

    const existingUser = await User.findOne({ email: email, password: password });

    if (existingUser) {
        return res.json({
            success: true,
            message: "Login Successful",
            data: existingUser
        })
    }

    else {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} ✈️`);
})