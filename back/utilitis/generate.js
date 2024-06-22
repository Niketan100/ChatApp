import jwt from "jsonwebtoken"

const generatetokenandcookie = (userId , res) =>{
    const token = jwt.sign({userId} , process.env.JWT_SECRET,{
        expiresIn : '15d'
    })

    res.cookie("jwt", token, {
        httpOnly : true,
        expires : new Date(Date.now() + 1000 * 60 * 60 * 24 * 15),
        sameSite : "strict"
    }) 
}

export default generatetokenandcookie;