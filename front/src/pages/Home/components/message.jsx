import React from 'react'
import { RxAvatar } from "react-icons/rx";
export default function message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar text-lg items-center justify-center '>
        
            <RxAvatar size={40} />     
        
        </div>

        <div className={`chat-bubble text-white bg-yellow-500`}>Hii  Niketan</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:11 pm</div>
    </div>
    
  )
}
