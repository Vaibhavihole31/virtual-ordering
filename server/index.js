import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import User from './models/User.js'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('Connected To MongoDB🤝');
})


// api route start here

app.post('/signup', async (req, res) => {
    const {name, phone, email, password, role} = req.body;

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

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT} ✈️`);
})