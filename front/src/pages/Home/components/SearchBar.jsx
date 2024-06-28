import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

export default function SearchBar() {
  return (
    <div className="mt-4">
      <form action="" className="flex gap-2">
        <input
          type="text"
          className="input input-bordered rounded-full w-11/12 px-4 py-2"
          placeholder="Search Here"
        />
        <button
          type="submit"
          className="btn btn-circle h-12 w-12 justify-center bg-gray-900 text-white hover:bg-gray-800 focus:outline-none"
          aria-label="Search"
        >
          <IoSearchSharp className="text-lg" />
        </button>
      </form>
    </div>
  );
}
