import jwt from "jsonwebtoken";
import cores from "cores";



const generatetokenandcookie = (userId, res) => {
    console.log(userId);
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    console.log(token);
    console.log(" token");
    
    // Check if token exists and set cookie for cross-site usage
    res.cookie("jwt", token, {
         // Set to true for security to prevent XSS attacks
        sameSite: "None", // Allow cross-site cookies
        secure: false, // Set secure to true for production environment
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    return token;
};

export default generatetokenandcookie;
