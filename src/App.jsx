import { useEffect, useState } from 'react'
import Login from './pages/login'
import SignUp from './pages/signup'
import Home from './home/home'
import {Toaster} from 'react-hot-toast'
import {BrowserRouter, Navigate, Route,Routes, useNavigate} from 'react-router-dom'
import { useAuthContext } from './components/context/AuthContext'
import { PrivateRoutes } from './components/privateRoutes/privateRoute'
import { useDispatch,useSelector } from 'react-redux'
import { startGetConverstion } from './actions/useConversation'
const url = import.meta.env.VITE_REACT_API_KEY;
//import ('dotenv').config()
function App() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [count, setCount] = useState(0)
  const {authUser}=useAuthContext()
  console.log("useAuth",authUser)
  //const apiKey = process.env.REACT_APP_API_KEY
  console.log("process",url)
  useEffect(()=>{
 dispatch(startGetConverstion())
  },[])
  const useConversation=useSelector((state)=>{
    return state.useConversation
  })
  console.log("userConversation",useConversation)
  return (
    <div className='p-4 h-screen items-center justify-center'>
    
      <Routes>
        <Route path='/' element={ <PrivateRoutes><Home/></PrivateRoutes>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={ <PrivateRoutes><SignUp/></PrivateRoutes>  }/>
      </Routes>
      <Toaster/>
     
     
    </div>
  )
}

export default App
