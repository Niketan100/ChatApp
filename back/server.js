import express from "express";
import cors from "cors";
const app = express();
import path from "path";

import dotenv from "dotenv";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import cookieParser from "cookie-parser";

import connectiontomongo from "./db/connection.js"
const PORT  = process.env.PORT || 3000;
import authroutes from "./routes/authroutes.js"
import User from "./models/usermodel.js";


dotenv.config();
app.use(cors({
    origin: 'http://localhost:5173', // Adjust the origin as needed
    credentials: true,
    options: {
        sameSite: "none",
        secure: process.env.NODE_ENV === "production"
    }
}));

const __dirname = path.resolve();

app.use(express.json());

app.use(cookieParser());


app.use("/api/auth/", authroutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname, "/front/dist")));


app.get('*' , (req, res) =>{
    res.sendFile(path.join(__dirname, "front", "dist", "index.html"));  // Change the path to your React build directory
})






app.listen(3000,()=>{
    connectiontomongo()
    console.log("Yes server is working")
})

