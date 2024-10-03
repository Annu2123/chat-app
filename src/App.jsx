import { useState } from 'react'
import Login from './pages/login'
import SignUp from './pages/signup'
import Home from './home/home'
import {Toaster} from 'react-hot-toast'
import {BrowserRouter, Navigate, Route,Routes, useNavigate} from 'react-router-dom'
import { useAuthContext } from './components/context/AuthContext'
function App() {
  const navigate=useNavigate()
  const [count, setCount] = useState(0)
  const {authUser}=useAuthContext()
  console.log("useAuth",authUser)

  return (
    <div className='p-4 h-screen items-center justify-center'>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={ authUser ? <Navigate to="/" /> : <SignUp/> }/>
      </Routes>
      <Toaster/>
     
     
    </div>
  )
}

export default App
