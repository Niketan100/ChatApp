import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { RiUserLine } from "react-icons/ri";

export default function Conversation() {
  return (
    <>
      <div className="text-gray-800 flex items-center gap-2 hover:bg-blue-100 hover:text-gray-800 rounded p-2 py-1 cursor-pointer">
        <div className="w-12">
          <Avatar alt="User Avatar" src="/static/images/avatar/3.jpg" />
        </div>

        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-gray-700">Niketan</p>
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
