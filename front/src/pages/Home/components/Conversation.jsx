import React from 'react';
import { RiUserLine } from "react-icons/ri";
import useconversation from '../../../store/useconversation.js';
import { useSocketContext } from '../../../context/socketcontext.jsx';

export default function Conversation({ conversation }) {
    const { selectedConversation, setSelectedConversation } = useconversation();
    const { onlineUsers } = useSocketContext();
    
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div
                className={`${
                    selectedConversation === conversation ? "bg-yellow-400" : ""
                } cursor-pointer text-gray-800 flex items-center gap-2 hover:bg-blue-100 hover:text-gray-800 rounded p-2 py-1`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className="relative w-12">
                    <img
                        src={conversation.profilePic}
                        alt={conversation.fullName}
                        className="rounded-full"
                    />
                    {isOnline && (
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                </div>
                <div className="flex flex-1 justify-between">
                    <div className="flex flex-col">
                        <p className="font-bold text-gray-700">{conversation.fullName}</p>
                        <p className="text-sm text-gray-500">Last message preview...</p>
                    </div>
                    <div className="flex items-center">
                        <RiUserLine className="text-xl" />
                    </div>
                </div>
            </div>
            <div className="my-2 border-t border-gray-300"></div>
        </>
    );
}
