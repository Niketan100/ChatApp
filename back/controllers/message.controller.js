import Conversation from '../models/conversation.model.js';
import Message from '../models/mossage.model.js';  // Assuming correct path to Message model

export const sendmessage = async (req, res) => {
    try {
        const { message } = req.body;
        const {id: receiverId } = req.params;
        const senderId = req.user._id;  // Ensure it's _id, not _Id

        // Find existing conversation or create a new one if not found
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        // If conversation does not exist, create a new one
        if (!conversation) {
            conversation = new Conversation({
                participants: [senderId, receiverId],
                messages: []  // Initialize messages array
            });
        }

        // Create a new message object
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        // Save the message first to get its _id
        await newMessage.save();

        // Push the message _id into the conversation's messages array
        conversation.messages.push(newMessage._id);

        // Save the updated conversation
        await conversation.save();

        console.log("Message was sent ");

        // Respond with the saved conversation
        res.status(200).json(conversation);
    } catch (error) {
        console.error(error);
        console.log("failed to send message")
        res.status(500).json({ error: 'Failed to send message' });
    }
}


export const getmessages = async (req, res) => {
    try {

        const {id : userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },   
        }).populate("messages");

        res.status(200).json(conversation);

    } catch (error) {
        console.log(error);        
    }
}