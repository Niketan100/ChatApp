import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../../hooks/useSendMessage.js';

export default function MessageInput() {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handlesub = async (e) => {
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className='h-20 items-center py-4 mx-4'>
      <form action='' className='w-full flex' onSubmit={handlesub}>
        <input 
          type='text' 
          className='rounded p-2 border-t mr-3 border-b border-l text-gray-800 border-gray-200 bg-white w-11/12' 
          placeholder='Type your message...'
          value={message}
          onChange={handleChange}
        />
        <button 
          type='submit' 
          className='text-lg text-center items-center btn-circle border-none bg-yellow-400 hover:bg-white text-black px-4 py-2 border border-blue-500 hover:border-blue-600'
          disabled={loading}
        >
          <IoIosSend />
        </button>
      </form>
    </div>
  );
}
