
import Login from './pages/Login/login.jsx'
import Signup from './pages/SignUp/singup.jsx'
import Home from './pages/Home/home.jsx'
import { Navigate, Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/authcontext.jsx'
import './index.css'

import './App.css'

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className='h-[100vh] p-4 overflow-hidden flex items-center justify-center backdrop-filter bg-clip-padding backdrop-blur-lg backdrop-opacity-0'>
      <Routes>
        <Route path="/" element={ authUser ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={ authUser ? <Navigate to="/home" /> : <Signup />} />
        <Route path="/login" element={ authUser ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={ authUser ? <Home /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
