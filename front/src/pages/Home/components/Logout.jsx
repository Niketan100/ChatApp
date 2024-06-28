import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';

export default function Logout() {
  return (
    <button className="flex items-center justify-center bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <BiLogOutCircle className="h-8 w-8 mr-2" />
      
    </button>
  );
}
