import React from 'react'
import Message from './messagebox.jsx'

export default function messagecontainer() {
  return (
    <>
      <div className='w-7/12 flex flex-col bg-black overflow-auto'>

        <div className='bg-slate-500 px-4 py-2 mb-2'> 
<span className='label-text'> TO: </span>
<span className='text-grey-900 font-bold '>Anmol Dhiman </span>
        </div>
        <Message/>
      </div>
    </>
  )
}
