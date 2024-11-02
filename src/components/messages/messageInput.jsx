import { useState } from "react";
import { MdSend } from "react-icons/md";
import { useDispatch } from "react-redux";
import { startSendMessage } from "../../actions/messages/messages";
export default function MessageInput({userSelected}){
    const dispatch=useDispatch()
    const [inputMessage,setMessageInput]=useState("")
    const handleMessageInput=(e)=>{
        setMessageInput(e)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(startSendMessage(userSelected._id,{message:inputMessage}))
    }
    return (
       <form className="px-4 my-3 " onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input 
            type="text"
            className="border text-sm rounded-lg flex-col w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            placeholder="send message"
            value={inputMessage}  
            onChange={(e)=>{setMessageInput(e.target.value)}} 
            />
            <button type="submit" className="absolute inset--y-0 
        
            end-0 flex items-center pe-3" >
            <MdSend />
            </button>
        </div>

       </form>
    )
}