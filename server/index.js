import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import Table from './models/Table.js';
import Order from './models/Order.js';

import { health } from './controllers/health.js';
import { signupPost } from './controllers/signup.js';
import { loginPost } from './controllers/login.js';
import { createFoodItemPost } from './controllers/foodItem.js';
import { foodItemByCategoryGet } from './controllers/foodItem.js';
import {foodItemByTitleGet } from './controllers/foodItem.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected To MongoDB🤝');
})

app.get('/health', health)

app.post('/signup', signupPost)

app.post('/login', loginPost)

app.post('/createFoodItem', createFoodItemPost)

app.get('/foodItemByCategory', foodItemByCategoryGet)

app.get('/foodItems', foodItemByTitleGet)

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

app.get('/avilableTables', async (req, res) => {
    const avilableTables = await Table.find({ booked: false });

    res.json({
        success: true,
        message: "Avilable tables fetched successfully",
        data: avilableTables
    })
})

app.post('/orderFoodItems', async (req, res) => {
    const { userId, tableNumber, items } = req.body;

    const totalOrders = await Order.countDocuments();
    const orderId = totalOrders + 1;

    const order = new Order({
        orderId,
        userId,
        tableNumber,
        items
    })

    const savedOrder = await order.save();

    res.json({
        success: true,
        message: "Order Placed Successfully",
        data: savedOrder
    })
})

app.get('/order', async (req, res) => {
    const { orderId } = req.query;

    const order = await Order.findOne({ orderId: orderId });

    res.json({
        success: true,
        message: "Order Feached Successfully",
        data: order
    })
})

app.get('/orderByUserId', async (req, res) => {
    const { userId } = req.query;

    const orders = await Order.find({ userId: userId });

    res.json({
        success: true,
        message: "Orders fetched Successfully",
        data: orders
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} ✈️`);
})