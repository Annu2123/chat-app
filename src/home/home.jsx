import { useState } from "react";
import MessageContainer from "../components/messages/MessageContainer";
import SideBar from "./sidebar";
import { useDispatch,useSelector } from "react-redux";
import { startGetMessage } from "../actions/messages/messages";
export default function Home(){
    const [userSelected,setUserSelected]=useState()
    const dispatch=useDispatch()
    const userSelectedFunc=(data)=>{
        console.log("selectedUser" ,data)
          setUserSelected(data)
          dispatch(startGetMessage(data._id))
    }

    console.log("userselected",userSelected)
    return  (
        <div className="flex sm:h-[450px md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
       <SideBar userSelectedFunc={userSelectedFunc}/>
       <MessageContainer userSelected={userSelected}/>
        </div>
    )
}