import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function Logout(){
    const navigate=useNavigate()
    const handleCLick=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate("/login")
    }
    return (
        <div className="mt-auto">
       <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={handleCLick}/>
        </div>
    )
}