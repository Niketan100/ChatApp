import React from 'react'
import Avatar from 'react-avatar'
export default function message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='bg-white w-10 rounded-full'>
                    
            </div>
        </div>

        <div className={`chat-bubble text-white bg-yellow-500`}>Hii This is Niketan</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:11 pm</div>
    </div>
    
  )
}
