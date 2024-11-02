import { useState } from "react"
import { useDispatch } from "react-redux"
import { startGetMessage } from "../actions/messages/messages"
import { useSocketContext } from "../components/context/socketContext"

export default function Conversation({item,userSelectedFunc}){
  const [userSelected,seUserSelected] =useState()
  const dispatch=useDispatch()
  const {onlineUsers} = useSocketContext()
  const online=onlineUsers.includes(item._id)
  //const isSelected=userSelected?.
 // console.log("profile",profile && profile)
 const handlCLickUser=()=>{
  userSelectedFunc(item)
  //dispatch(startGetMessage(item._id))
 }
    return (   
       <>
       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer" onClick={handlCLickUser}>
          <div className={`avatar ${online ? "online" :""}`}>
            <div className="w-12 rounded-full">
               <img src={item && item.profilePicture }/>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="gap-3 justify-between">
                <p className="font-bold text-gray-200">
                  {item?.userName}
                </p>
                <span className="text-xl">🎃</span>
            </div>
          </div>
       </div>
       <div className="divider my-0 py-0 h-1">

       </div>
       </>
    )
}