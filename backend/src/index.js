import express from 'express';
import cookieParser from "cookie-parser"
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.routes.js';
import dotenv from "dotenv"; 
import { connectDB } from './lib/db.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT=process.env.PORT;
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);



app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}`);
    connectDB()
})