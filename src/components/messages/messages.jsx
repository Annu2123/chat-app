import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetMessage } from "../../actions/messages/messages"
import { useAuthContext } from "../context/AuthContext"
import { extractTime } from "../utils/extractTime"
import useLIstenMessage from "../hooks/useLIstenMessage"
export default function Message({msg,userSelected}){
    const [message,setMessage]=useState({})
    const {authUser}=useAuthContext()
    //useLIstenMessage()
    const dispatch=useDispatch()
    useEffect(()=>{
     setMessage(msg)
    },[msg])
    const formatedTime=extractTime(msg.createdAt)
    const fromme=msg.senderId === authUser._id 
    const chatclassName= fromme ? "chat-end" : "chat-start"
    const profilePic= fromme ? authUser.profilePicture : userSelected.profilePicture
    const bubbleBgColor=fromme ? 'bg-blue-500' : ""
    return (
        <div className={`chat ${chatclassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img 
                    alt="Tailwind CSS chat bubble component"
                    src={profilePic}/>
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message && message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatedTime}</div>
        </div>
    )
}