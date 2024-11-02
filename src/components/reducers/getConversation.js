const initialState={
    userConversation:[]
}
const userConversationReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_CONVERSATION" :{
            return {...state,userConversation:action.payload}
        }
        default:{
            return state
        }
    }
}
export default userConversationReducer