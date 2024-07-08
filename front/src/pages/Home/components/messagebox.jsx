import React from 'react';
import Message from './message.jsx';
import useGetMessages from '../../../hooks/useGetMessages.js';
import MessageInput from './messageinput.jsx'


export default function MessageBox() {
  const { messages, loading } = useGetMessages();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='px-4 flex-1 overflow-auto mt-6'>
        {messages.length === 0 ? (
          <p className='justify-center items-center flex mt-6'>Send a message to start the conversation</p>
        ) : (
          messages.map((message) => (
            <Message 
              key={message._id} 
              message1={message.message} 
              senderId={message.senderId} 
              receiverId={message.receiverId}  
              time={message.createdAt}
            />
          ))
        )}
      </div>
      <div className='mt-auto'>
        <MessageInput />
      </div>
    </>
  );
}
