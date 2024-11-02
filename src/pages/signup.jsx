import { useState } from "react"
import GenderCheckbox from "./genderCheckbox"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
import useSignup from "../components/hooks/useSignup"

export default function SignUp(){
    console.log("SignUp component is rendering");
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [gender,setGender]=useState("")
    // const [formData,setformData]=useState({
    //     name:"",
    //     email:"",
    //     password:""
    // })
//const {loading,signUp}=useSignup()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const formData={
            userName:name,
            password:password,
            email:email,
            gender:gender,
            confirmPassword
        }
        await signUp(formData)
        // const {name,value}=e.target
        // setformData({
        //     ...formData,[name]:value
        // })
    //     console.log("register data",formData)

    //     try{
    //         const response=await axios.post('http://localhost:3002/api/auth/user-register',formData)
    //         console.log("register response",response.config.data)
    // navigate('/')
    //     }catch(err){
    //         console.log(err)
    //     }
    }
    const handelGender=(value)=>{
        console.log("value",value)
        setGender(value)
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

            <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3x1 font-semibold text-center text-gray-300">
                    sign up <span className="text-blue-500"> chatapp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                           <span className="text-base label-text " >full name</span>
                        </label>
                        <input
                     type="text"
                        placeholder='enter full name'
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                          className="input input-bordered input-secondary w-full max-w-xs"/>
                    </div>
                    <div>
                        <label className="label p-2">
                           <span className="text-base label-text ">Email</span>
                        </label>
                        <input
                     type="text"
                        placeholder='enter email'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                          className="input input-bordered input-secondary w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label p-2">
                           <span className="text-base label-text "> password</span>
                        </label>
                        <input
                     type="text"
                        placeholder='enter password'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                          className="input input-bordered input-secondary w-full max-w-xs" />
                    </div>
                    <GenderCheckbox handelGender={handelGender}/>
                   <Link to="/login"><a className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">
                        already have account
                    </a></Link> 
                    <div>
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700">submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}