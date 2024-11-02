const initialState={
    messages:[]
}
const messageReducers=(state=initialState,action)=>{
    switch(action.type)  {
        case  "GET_MESSAGES"  :{
            return  {...state,messages:action.payload}
        }
        case 'SENDMESSAGE'  :{
            return {...state,messages:[...state.messages,action.payload]}
        }
        case 'ADDNEWMESSAGE'  :{
            return {...state,messages:[...state.messages,action.payload]}
        }
        default :{
            return state
        }
    }
}
export default messageReducers