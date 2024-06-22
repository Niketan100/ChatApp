import User from "../models/usermodel.js";
import generatetokenandcookie from "../utilitis/generate.js";
import bcrypt from "bcryptjs"

export const login = async (req,res) =>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username})

        if(!user){
            res.status(404).json({"Error" : "User Not Found"});
        }
        const ispassscorrect = await bcrypt.compare(password, user?.password || "")
        if(!ispassscorrect){
            return res.status(400).json({"error" : "password did not match"})
        }
        generatetokenandcookie(user._id , res);

        
        res.status(200).json({
            "user" : user.username,
            "fullName" : user.fullName
        })


    }catch(err){
        console.log(err);
    }
}

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
                fullname : newUser.fullname,
                username : newUser.username,
                profiePic : newUser.profiePic,
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