import express from 'express';
import cookieParser from "cookie-parser"
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.routes.js';
import dotenv from "dotenv"; 
import { connectDB } from './lib/db.js';
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json({limit:'1mb'}));

app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));


const PORT=process.env.PORT;
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);



app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}`);
    connectDB()
})