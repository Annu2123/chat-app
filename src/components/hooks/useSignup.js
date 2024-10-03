import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useSignup(){
    const [loading,setLoading]=useState(false)
    
    const signup=async ({fullname,userName,password,gender,confirmPassword})=>{
       const success= handleInputError({fullname,userName,password,gender})
       if(!success) return ;

       try{
          const res=await axios.post("http://localhost:3002/api/auth/user-register",formData)
          console.log("response Data",res.data)
       }catch(error){
        toast.error(error.message)
       }finally{
        setLoading(false)
       }
       return {loading,signup}
}
function handleInputError({fullname,userName,password,confirmPassword,gender}){
    if(!fullname || !userName || !password || !gender){
        toast.error("please fill in all fields")
        return false
    }
    if(password !== confirmPassword){
        toast.error("password do not match")
        return false
    }
    if(password.length <6 ){
        toast.error("passsword must be atleast 6 charactor")
        return false
    }
    return true
}
}