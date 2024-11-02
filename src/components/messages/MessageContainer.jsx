import { useEffect, useState } from "react";
import Messages from "./message";
import MessageInput from "./messageInput";
import Message from "./messages";
import NoCHatSelected from "./Nochatselected";
import { useDispatch, useSelector } from "react-redux";
import { startGetMessage } from "../../actions/messages/messages";

export default function MessageContainer({userSelected}){
    const [noChatSelected,setNoChatSelected]=useState(true)
    // const messages=useSelector=((state)=>{
    //     return state.
    // })
    const dispatch=useDispatch()
   // dispatch(startGetMessage())
   useEffect(()=>{
    if(userSelected){
        setNoChatSelected(false)
    }
   },[userSelected])
    return (
        <div className="md:min-w[500px] flex flex-col">
            
            {/* header */}
           { noChatSelected ? <NoCHatSelected/>  : (
            <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text"> to:</span>{" "}
            <span className="text-gray-900 font-bold">{userSelected.userName}</span>
            
             </div>

             <Messages userSelected={userSelected}/>
             <MessageInput userSelected={userSelected}/>  </> )}

        </div>
    )
}