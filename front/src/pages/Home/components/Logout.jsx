import React from 'react';
import uselogout from '../../../hooks/uselogout.js';
import { BiLogOutCircle } from 'react-icons/bi';

export default function Logout() {
  const { loading, logout } = uselogout();
  
  return (
    <button 
      onClick={logout} 
      disabled={loading} 
      className={`flex items-center justify-center ${loading ? 'bg-gray-500' : 'bg-yellow-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded`}
    >
      <BiLogOutCircle className="h-8 w-8 mr-2" />
      {loading ? 'Logging out...' : 'Logout'}
    </button>
  );
}
