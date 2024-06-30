import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { RiUserLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

export default function Conversation() {
  return (
    <>
      <div className="text-gray-800 flex items-center gap-1 hover:bg-blue-100 hover:text-gray-800 rounded p-2 py-1 cursor-pointer online">
        <div className="w-12 online">
        <RxAvatar size={40}/>
        </div>

        <div className="flex flex-1 justify-between online">
          <div className="flex flex-col">
            <p className="font-bold text-gray-700">Niketan</p>
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
