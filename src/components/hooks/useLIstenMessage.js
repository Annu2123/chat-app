import { useDispatch, useSelector } from "react-redux"
import { useSocketContext } from "../context/socketContext"
import { startAddNewMessage } from "../../actions/messages/messages"
import { useEffect } from "react"
export default function  UseLIstenMessage(){
    const {socket} =useSocketContext()
    const dispatch=useDispatch()
    // const messages=useSelector=((state)=>{
    //     return state.messages.messages
    // })
    console.log("insideuselistenhook")
    useEffect(()=>{
        console.log("newmessageinuseefect",)
        socket.on("newMessage",(newMessage)=>{
            console.log("newmessageinuseefect",newMessage)
             dispatch(startAddNewMessage(newMessage))
        })
       // return ()=>socket?.off("newMessage")
    },[])
}
