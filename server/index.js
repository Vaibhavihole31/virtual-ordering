import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

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
import { orderFoodItemsPost } from './controllers/orderFoodItem.js';
import { orderGet } from './controllers/orderFoodItem.js';
import { orderByUserIdGet } from './controllers/orderFoodItem.js';

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

app.post('/orderFoodItems', orderFoodItemsPost)

app.get('/order', orderGet)

app.get('/orderByUserId', orderByUserIdGet)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} ✈️`);
})