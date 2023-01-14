import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import Order from './models/Order.js';

import { health } from './controllers/health.js';
import { signupPost } from './controllers/signup.js';
import { loginPost } from './controllers/login.js';
import { createFoodItemPost } from './controllers/foodItem.js';
import { foodItemByCategoryGet } from './controllers/foodItem.js';
import { foodItemByTitleGet } from './controllers/foodItem.js';
import { createTablePost } from './controllers/table.js';
import { bookTablePost } from './controllers/table.js';
import { unBookTablePost } from './controllers/table.js';
import { avilableTablesGet } from './controllers/table.js';

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

app.post('/createTable', createTablePost)

app.post('/bookTable', bookTablePost)

app.post('/unBookTable', unBookTablePost)

app.get('/avilableTables', avilableTablesGet)

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