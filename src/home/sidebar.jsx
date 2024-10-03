import Conversation from "./conversation";
import Logout from "./logout";
import SearchInput from "./searchinput";

export default  function SideBar(){
    return (
        <div>
            <SearchInput/>

            <div className="divider px-3"></div>
            <Conversation/>
            <Logout/>
        </div>
    )
}