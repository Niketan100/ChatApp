import React from 'react';
import Message from './messagebox.jsx';
import { useAuthContext } from '../../../context/authcontext.jsx'


const MessageContainer = () => {
  const {authUser} = useAuthContext();
  
  const noChatSelected = true; // Assuming this is for testing purposes

  return (
    <div className='w-7/12 flex flex-col bg-gray-800 overflow-auto'>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='h-12 bg-yellow-500 px-4 py-2 mb-2'>
            <span className='label-text text-white font-semibold text-lg'>To : </span>
            <span className='text-lg text-grey-900 font-sans font-bold text-white'>Anmol Dhiman</span>
          </div>
          <Message />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const storedUserData = localStorage.getItem('chat-user');
      
            const userData = JSON.parse(storedUserData);

  return (
    <div className='w-full flex items-center justify-center h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-grey-200 font-semibold flex flex-col items-center gap-2'>
        <p>
          Welcome
          <span> </span>
          <span className="text-yellow-500 bg-grey-300">
                Mr. {userData.fullName}
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
