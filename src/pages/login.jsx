import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContext";
export default function Login() {
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {authUser,setAuthUser}=useAuthContext()

  const handleSubmit=async(e)=>{
     e.preventDefault()
     const formData={
      email:email,
      password:password
     }
     try{
     // console.log(formData)
      const response=await axios.post("http://localhost:3002/api/auth/user-login",formData)
      console.log("response",response.data)
      console.log(response)
      const user=response.data.user
      const token=response.data.token
      localStorage.setItem('user',JSON.stringify(user))
       localStorage.setItem('token',token)
       setAuthUser(user)
     navigate("/")
     }catch(err){
      console.log(err)
     }
  }
  return (
    <div className="flex flex-column items-center justify-center min-w-95 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-mdbg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-gray-300">
          login
          <span className="text-blue-500">chat app </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">username</span>
            </label>
            <input
              type="text"
              placeholder=" Enter UserName"
              value={name}
              onChange={(e)=> {setName(e.target.value)}}
              className="input input-bordered input-primary w-full max-w-xs" />
            <label className="label p-1">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=> {setEmail(e.target.value)}}
              className="input input-bordered input-primary w-full max-w-xs" />
            <label className="label p-1">
              <span className="text-base label-text"> password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="input input-bordered input-primary w-full max-w-xs" />
          </div>
          <Link to="/signup" className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block">
           dont have account
          </Link>
          <div className="">
            <button className="btn btn-block btn-sm mt-2 ">Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}