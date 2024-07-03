import User from "../models/usermodel.js";

const userController = async (req, res) => {
    try {
        const storedUserId = req.user._id;

        console.log(storedUserId);

        // Exclude the currently authenticated user and the password field
        const allUsers = await User.find({ _id: { $ne: storedUserId } }).select('-password');
        
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error", error.message);
        res.status(500).json({ error: error.message }); // Send error response
    }
}

export default userController;
