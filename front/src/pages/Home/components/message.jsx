import React from 'react';
import useConversation from '../../../store/useconversation.js';

export default function Message({ message1, senderId, receiverId, time }) {
  const storedUserData = localStorage.getItem('chat-user');
  const userData = storedUserData ? JSON.parse(storedUserData) : {};
  const { selectedConversation } = useConversation();
  const isSender = senderId === userData._id;

  const getProfilePic = (id) => {
    if (id === userData._id) {
      return userData.profilePic;
    } else {
      return selectedConversation.profilePic;
    }
  };

  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock format
    return `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  return (
    <div className={`chat ${isSender ? 'chat-end' : 'chat-start'}`}>
      <div className='chat-image w-10 avatar text-lg items-center justify-center'>
        <img className='' src={getProfilePic(senderId)} alt='Profile' />
      </div>
      <div className={`chat-bubble ${isSender ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-black'} font-family`}>
        {message1}
      </div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center ${isSender ? 'justify-end' : 'justify-start'}`}>
        {formatTime(time)}
      </div>
    </div>
  );
}
