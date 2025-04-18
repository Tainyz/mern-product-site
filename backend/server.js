import express from 'express';
import { connectDB } from './config/db.js';

import dotenv from 'dotenv';
import productRoutes from './routes/product.route.js';

dotenv.config();
const app = express();

app.use(express.json()); //allow express to parse json data

app.use("/api/products", productRoutes); //use product routes

app.listen(5000,() => {
    connectDB();
    console.log('Server is running on port 5000 ');
});

