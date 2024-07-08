import React from 'react';
import { RiUserLine } from "react-icons/ri";
import useconversation from '../../../store/useconversation.js';

export default function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation } = useconversation();
  
  return (
    <>
      <div
        className={`${
          selectedConversation === conversation ? "bg-yellow-400" : ""
        } cursor-pointer text-gray-800 flex items-center gap-1 hover:bg-blue-100 hover:text-gray-800 rounded p-2 py-1`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="w-12 online">
          <img
            src={conversation.profilePic}
            alt={conversation.fullName}
            className="rounded-full online"
          />
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
