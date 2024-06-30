import React from 'react';

export default function Gender({ onCheckboxChange, selectedGender }) {
  return (
    <div className='flex'>   
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? "selected" : ""}`}>
          <span className='text-lg label-text text-white'>
            Male
          </span>
          <input
            type="checkbox"
            className='checkbox border-white'
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? "selected" : ""}`}>
          <span className='text-lg label-text text-white'>
            Female
          </span>
          <input
            type="checkbox"
            className='font-light checkbox border-white'
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}
