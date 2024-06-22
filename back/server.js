import express from "express";
const app = express();
import dotenv from "dotenv";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import cookieParser from "cookie-parser";

import connectiontomongo from "./db/connection.js"
const PORT  = process.env.PORT || 3000;
import authroutes from "./routes/authroutes.js"
import User from "./models/usermodel.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth/", authroutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)



app.listen(3000,()=>{
    connectiontomongo()
    console.log("Yes server is working")
})

