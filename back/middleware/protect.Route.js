import jwt from 'jsonwebtoken';
import express from 'express';
const app = express();
import User from '../models/usermodel.js';
import cookieParser from 'cookie-parser';

app.use(cookieParser());

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log(token);
        console.log('inside protect route');
      
        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized bhai' });
        }

        
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Retrieve user from database based on decoded id
        const user = await User.findById(decoded.id).select("-password");
        console.log(user);

        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Attach user object to the request for further handling
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in protectRoute middleware:', error);
        return res.status(401).json({ message: 'Unauthorized Ho tum' });
    }
};

export default protectRoute;
