import React from 'react'

export default function gender() {
  return (
  <div className='flex'>   
    <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
            <span className='text-lg label-text'>
                Male
            </span>
            <input type="checkbox" className='checkbox border-slate-900' />
        </label>
    </div>
    <div className='form-control'>
    <label className='label gap-2 cursor-pointer'>
            <span className='text-lg label-text'>
                Female
            </span>
            <input type="checkbox" className='font-light checkbox border-slate-900' />
        </label>
    </div>

    </div>
  )
}