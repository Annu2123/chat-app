import { useState } from "react";
import Messages from "./message";
import MessageInput from "./messageInput";
import Message from "./messages";
import NoCHatSelected from "./Nochatselected";

export default function MessageContainer(){
    const [noChatSelected,setNoChatSelected]=useState(true)
    return (
        <div className="md:min-w[450px] flex flex-col">
            
            {/* header */}
           { noChatSelected ? <NoCHatSelected/>  : (
            <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text"> to:</span>{" "}
            <span className="text-gray-900 font-bold">anubrath</span>
            
             </div>

             <Messages/>
             <MessageInput/>  </> )}

        </div>
    )
}