import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const __dirname = path.resolve();

import { health } from './controllers/health.js';
import { signupPost } from './controllers/signup.js';
import { loginPost } from './controllers/login.js';
import { createColdItemPost } from './controllers/coldItem.js';
import { coldItemByCategoryGet } from './controllers/coldItem.js';
import { coldItemByTitleGet } from './controllers/coldItem.js';
import { createTablePost } from './controllers/table.js';
import { bookTablePost } from './controllers/table.js';
import { unBookTablePost } from './controllers/table.js';
import { avilableTablesGet } from './controllers/table.js';
import { orderColdItemsPost } from './controllers/orderColdItem.js';
import { orderGet } from './controllers/orderColdItem.js';
import { orderByUserIdGet } from './controllers/orderColdItem.js';
import { allColdItemGet } from './controllers/coldItem.js';

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

app.post('/createColdItem', createColdItemPost)

app.get('/coldItemByCategory', coldItemByCategoryGet)

app.get('/coldItems', coldItemByTitleGet)

app.get("/allCodeItems", allColdItemGet)

app.post('/createTable', createTablePost)

app.post('/bookTable', bookTablePost)

app.post('/unBookTable', unBookTablePost)

app.get('/avilableTables', avilableTablesGet)

app.post('/orderColdItems', orderColdItemsPost)

app.get('/order', orderGet)

app.get('/orderByUserId', orderByUserIdGet)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} ✈️`);
})