import Conversation from "./conversation";
import { useDispatch,useSelector } from "react-redux";
import { startGetConverstion } from "../actions/useConversation";
import { useState,useEffect } from "react";
export default function Conversations({userSelectedFunc}){
  const dispatch=useDispatch()
  const [conversation,setConversation]=useState()
  useEffect(()=>{
    dispatch(startGetConverstion())
  },[])
  const useConversation=useSelector((state)=>{
    return state.userConversation.userConversation
  })
  console.log("useConversation",useConversation)
    return (
        <div className=" py-2 flex flex-col overflow-auto">
          {
            useConversation && useConversation.map((item)=>{
             return  <Conversation key={item._id} item={item} userSelectedFunc={userSelectedFunc}/>
            })
          }
     
        </div>
    )
}