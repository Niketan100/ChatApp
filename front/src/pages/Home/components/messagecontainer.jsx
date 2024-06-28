import React from 'react';
import Message from './messagebox.jsx';

const MessageContainer = () => {
  const noChatSelected = true; // Assuming this is for testing purposes

  return (
    <div className='w-7/12 flex flex-col bg-gray-800 overflow-auto'>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-gray-600 px-4 py-2 mb-2'>
            <span className='label-text text-white font-semibold'>To : </span>
            <span className='text-grey-900 font-bold text-white'>Anmol Dhiman</span>
          </div>
          <Message />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className='w-full flex items-center justify-center h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-grey-200 font-semibold flex flex-col items-center gap-2'>
        <p>
          Welcome
          <span> </span>
          <span className="text-yellow-500 bg-grey-300">
                Mr. Niketan
          </span>
        </p>
        
        Start Conversations with
        
        
        <span className="text-yellow-500 bg-grey-300">
                 ClOSer
                </span>
      </div>
      
    </div>
  );
};

export default MessageContainer;
