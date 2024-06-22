import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized bhai' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Retrieve user from database based on decoded userId
        const user = await User.findById(decoded.userId).select("-password");

        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Attach user object to the request for further handling
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in protectRoute middleware:', error);
        return res.status(401).json({ message: 'Unauthorized Ho tum ' });
    }
};

export default protectRoute;
