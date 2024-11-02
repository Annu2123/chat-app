import { useEffect,useRef,useState } from "react";
import Message from "./messages";
import { useSelector } from "react-redux";
import UseLIstenMessage from "../hooks/useLIstenMessage";
export default function Messages({userSelected}){
    const [messages,setMessages]=useState([])
    const lastMessageRef=useRef()
    const message=useSelector((state)=>{
        return state.messages.messages
    })
    UseLIstenMessage()
    useEffect(()=>{
        setMessages(message)
        setTimeout(()=>{
            lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
        },100)
    },[message])
    return (
        <div className="px-4 flex-1 overflow-auto">
            {
                message.length > 0 ? (  message.map((msg)=>{
                     return <div  key={msg._id} ref={lastMessageRef}> <Message msg={msg} userSelected={userSelected}/></div>
                })) :(<p>No Messages</p>)
            }
 
        </div>
    )
}