import axios from "axios";
const url=import.meta.env.VITE_REACT_API_KEY
export const GETMESSAGES="GET_MESSAGES"
export const startGetMessage=(id)=>{
     return async(dispatch)=>{
        console.log("iddd",id)
        try{
            const Api=`${url}message/getMessage/${id}`
           // console.log("apiiii",Api)
          const response=await  axios.get(Api,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
           console.log("messageresponse",response)
           dispatch(startMessage(response.data))
        }catch(error){
            console.log("error.response",)
         console.log("messageerror",error)
        }
         
     }
}

export const startSendMessage=(id,message)=>{
    return async (dispatch)=>{
        const Api=`${url}message/send/${id}`
        try{
            const response=await axios.post(Api,message,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            console.log(response.data,"responsedata")
            dispatch(sendMessage(response.data))
        }catch(err){
            console.log(err,"error")
        }
    }
}

export const startAddNewMessage=(message)=>{
    console.log("newMsage",message)
    return async(dispatch)=>{
       dispatch(startaddMessage(message))
    }
}
const startaddMessage=(data)=>{
    return {
        type:"ADDNEWMESSAGE",
        payload:data
    }
}
const startMessage=(data)=>{
    return  {
        type:GETMESSAGES,
        payload:data
    }
}
const sendMessage=(data)=>{
    return {
        type:"SENDMESSAGE",
        payload:data
    }
}