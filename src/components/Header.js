import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <header className="header flex justify-between p-5 items-center lg:bg-blue-900 text-slate-50 shadow-xl">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL} />
            </div>
            <div className="flex">
                <ul className="flex mx-5">
                    <li className="px-4 hover:text-slate-300 transition .5s ease-in">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4 hover:text-slate-300 transition .5s ease-in"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:text-slate-300 transition .5s ease-in"><Link to="/about">About Us</Link></li>
                    <li className="px-4 hover:text-slate-300 transition .5s ease-in"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 hover:text-slate-300 transition .5s ease-in"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:text-slate-300 transition .5s ease-in"><Link to="/">Cart</Link></li>
                    <li className="px-4 hover:text-slate-300 transition .5s ease-in"><button
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                        }}
                        className="login">{btnNameReact}</button></li>
                </ul>
            </div>
        </header >
    )
};

export default Header