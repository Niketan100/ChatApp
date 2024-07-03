import User from "../models/usermodel.js";
import generatetokenandcookie from "../utilitis/generate.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ "Error": "User Not Found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!isPasswordCorrect) {
            return res.status(400).json({ "error": "Password did not match" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        res.cookie("jwt", token, {
            httpOnly: true, // Recommended for security
            sameSite: 'None', // Allow cross-site cookies
            secure: true, // Set to true for production
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });

        res.status(200).json({
            "_id": user._id,
            "token": token,
            "user": user.username,
            "fullName": user.fullName,
            "gender": user.gender
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ "error": "Something went wrong" }); // Handle other errors
    }
};

export const signup = async (req,res) =>{
    try {
        const {fullName , username , password , confirm , gender}= req.body; 

        if(password!=confirm){
            return res.status(400).json({"error" : "password did not match"})
        }

        const user = await User.findOne({username})
        
        if(user){
            return res.status(400).json({"error" : "user already exist"})
        }   

        // hash password 

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)

        const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        // https://avatar.iran.liara.run/public
        const profilePic = (gender === "male") ? boyprofilepic : girlprofilepic;

        const newUser = new User({
            fullName,
            username,
            password : hashedpassword,
            gender,
            profilePic
        
        })

            if(newUser){
                generatetokenandcookie(newUser._id , res);
                 await newUser.save();

            res.status(201).json({
                _id : newUser._id,
                fullName : newUser.fullName,
                username : newUser.username,
                profiePic : newUser.profilePic,
                gender : newUser.gender,
            })

            }else{
                res.status(400).json({"error" : "something went wrong"})
            }


    } catch (error) {
        console.log(error);
    }
}

export const logout = (req,res) =>{
    try {
        res.cookie("jwt", "", {maxAge : 0});
        res.status(200).json({"message" : "logged out"})
        

    } catch (error) {
        console.log("Logout Error", error);
    }
}