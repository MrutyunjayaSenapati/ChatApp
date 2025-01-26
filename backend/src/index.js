import express from 'express';
import cookieParser from "cookie-parser"
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.routes.js';
import dotenv from "dotenv"; 
import { connectDB } from './lib/db.js';
import cors from "cors";
import path from "path";
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
const __dirname=path.resolve();
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}



server.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}`);
    connectDB()
})