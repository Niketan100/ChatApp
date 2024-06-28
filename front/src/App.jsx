import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login/login.jsx'
import Signup from './pages/SignUp/singup.jsx'
import Home from './pages/Home/home.jsx'

import './App.css'

function App() {
 

  return (
    <div className='p-4 h-screen overflow-hidden flex items-center bg-grey-400 justify-center backdrop-filter bg-clip-padding backdrop-blur-lg backdrop-opacity-0'>
       
        <Home/>
  
        
    </div>
  )
}

export default App
