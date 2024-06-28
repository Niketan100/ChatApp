import React from 'react';
import { IoIosSend } from "react-icons/io";

export default function MessageInput() {
  return (
    <div className='h-20 items-center py-4 mx-4'>
      <form action='' className='w-full flex'>
        <input 
          type='text' 
          className='rounded p-2 border-t mr-3 border-b border-l text-gray-800 border-gray-200 bg-white w-11/12' 
          placeholder='Type your message...'
        />
        <button 
          type='submit' 
          className=' text-lg text-center items-center btn-circle  bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 border border-blue-500 hover:border-blue-600'
        >
          <IoIosSend />
        </button>
      </form>
    </div>
  );
}
