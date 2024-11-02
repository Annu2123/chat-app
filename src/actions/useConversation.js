import axios from "axios";
const url=import.meta.env.VITE_REACT_API_KEY
export const GET_CONVERSATION='GET_CONVERSATION'
export const startGetConverstion=()=>{
    return async(dispatch)=>{
        try {
            const Api=`${url}getSideBarUser`
            const response= await axios.get(Api,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            console.log(response.data)
            dispatch(getConversation(response.data))

        }catch(error){
            console.log(error)
        }
    }
}
const getConversation=(data)=>{
   return {
    type:"GET_CONVERSATION",
    payload:data
   }
}