import Conversation from "./conversation";
import Conversations from "./conversations.";
import Logout from "./logout";
import SearchInput from "./searchinput";

export default  function SideBar({userSelectedFunc}){
    return (
        <div>
            <SearchInput/>

            <div className="divider px-3"></div>
            <Conversations userSelectedFunc={userSelectedFunc}/>
            <Logout/>
        </div>
    )
}