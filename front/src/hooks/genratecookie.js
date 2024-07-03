// utilitis/generate.js
import jwt from "jsonwebtoken";

const generatetokenandcookie = (userId, res) => {
    const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    console.log(generatetokenandcookie);
    console.log("Its the token")    // Check if token exists
    res.cookie("jwt", token, {
        httpOnly: false,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    return token;
};

export default generatetokenandcookie;
