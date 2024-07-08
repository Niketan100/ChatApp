import React, { useEffect } from 'react';
import Message from './messagebox.jsx';
import { useAuthContext } from '../../../context/authcontext.jsx'
import userConversation from '../../../store/useconversation.js';
import { set } from 'mongoose';

const MessageContainer = () => {
  const {authUser} = useAuthContext();
  const{selectedConversation , setSelectedConversation } = userConversation();

  useEffect(() =>{
    return () => setSelectedConversation(null);
  },[setSelectedConversation])
  
// Assuming this is for testing purposes

  return (
    <div className='w-7/12 flex flex-col bg-gray-800 overflow-auto h-[calc(100vh-4rem)]'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
        <div className="h-12 flex items-center bg-yellow-500 p-4 shadow-md">
    <img src={selectedConversation.profilePic} alt="Logo" className="w-10 h-auto mr-4"/>
    <h1 className="text-base font-semibold text-white">{selectedConversation.fullName}</h1>

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
  console.log(userData);

  return (
    <div className='w-ful flex items-center justify-center h-[calc(100vh-4rem)]'>
      
      <div className='px-4 text-center sm:text-lg md:text-xl text-grey-200 font-semibold flex flex-col items-center gap-2'>
            <img className='size-40 ' src={userData.profilePic} alt={userData.fullName} />
        <p>
          Welcome
          <span> </span>
          <span className="text-yellow-500 bg-grey-300">
                 {userData.gender === 'male' ? "Mr." : "Mrs." }
                 {userData.fullName}
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
