import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('Connected To MongoDB🤝');
})


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT} ✈️`);
})