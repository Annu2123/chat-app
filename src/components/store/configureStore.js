import {createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import userConversationReducer from '../reducers/getConversation'
import messageReducers from '../reducers/messageReducer'
const configureStore=()=>{
    const store = createStore(combineReducers({
        userConversation:userConversationReducer,
        messages:messageReducers
    }),applyMiddleware(thunk))
    return store
}
export default configureStore