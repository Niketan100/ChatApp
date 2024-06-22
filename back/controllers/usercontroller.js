import User from "../models/usermodel.js";

const userController = async (req, res) => {

    try {
        const loggedInUser = req.user._id;
        const allUsers = await User.find({_id : { $ne : loggedInUser}})
        res.status(200).json(allUsers)

    } catch (error) {
        console.log("Error", error);
    }

}

export default userController;