import * as React from 'react';
import { RiUserLine } from "react-icons/ri";

export default function Conversation({ conversation }) {
  return (
    <>
      <div className="text-gray-800 flex items-center gap-1 hover:bg-blue-100 hover:text-gray-800 rounded p-2 py-1 cursor-pointer online">
        <div className="w-12 online">
          <img
            src={conversation.profilePic}
            alt={conversation.fullName}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-1 justify-between online">
          <div className="flex flex-col">
            <p className="font-bold text-gray-700">{conversation.fullName}</p>
            <p className="text-sm text-gray-500">Last message preview...</p>
          </div>
          <div className="flex items-center online">
            <RiUserLine className="text-xl" />
          </div>
        </div>
      </div>
      <div className="my-2 border-t border-gray-300"></div>
    </>
  );
}
