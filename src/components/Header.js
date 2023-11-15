
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [buttonReact,setButtonReact]=useState("Login")
    const onlineStatus=useOnlineStatus();

    return (
        <div className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 mb-6 shadow-md"> 
        <div className="flex-1 flex justify-between items-center">
        <img className="w-20" src={LOGO_URL}  />
        </div>
     
        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
         <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
         <li>Online Status:{onlineStatus ? "✔" :"🛑"}</li>
         <li className="md:p-4 py-3 px-0 block"><Link to=""> Home</Link></li>
          <li className="md:p-4 py-3 px-0 block"><Link to="/about"> About us</Link></li>
          <li className="md:p-4 py-3 px-0 block"><Link to="/contact"> Contact us</Link></li>
          <li className="md:p-4 py-3 px-0 block"><Link to="/grocery"> Grocery</Link></li>
          
         
          <li className="md:p-4 py-3 px-0 block">Cart</li>
          
          <button  onClick={()=>{
            buttonReact=="Login" ? 
            setButtonReact("Logout")
            :setButtonReact("Login")
            
          }} className="login">{buttonReact}</button>
        </ul>
        </div>
     
        </div>
    )
}
export default Header;