import React from 'react'
import Message from './message.jsx'
import Messageinput from './messageinput.jsx'
export default function messagebox() {
  return (
        <>
            <div className='px-4  flex-1 overflow-auto'>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>      
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>      
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>      
                <Message/>
            </div>
            <div className='mt-auto'>
                <Messageinput/>
            </div>
        </>
  )
}
