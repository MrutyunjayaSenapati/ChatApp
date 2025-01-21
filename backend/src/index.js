import express from 'express';
import cookieParser from "cookie-parser"
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.routes.js';
import dotenv from "dotenv"; 
import { connectDB } from './lib/db.js';
import cors from "cors";
import { server,app } from './lib/socket.js';

dotenv.config();

app.use(express.json({limit:'1mb'}));

app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    // origin:true,
    credentials:true
}));


const PORT=process.env.PORT;
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);



server.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}`);
    connectDB()
})