
import React from "react";
import  "./Welcome.css"
import { useNavigate } from "react-router-dom";
const NavBar=()=>{
    const navigate =useNavigate()
    return<div id="navbar">
    
    <div id="icons" > 
    <i className="fa-brands fa-facebook fa-2x"id="colo"></i>
    <i className="fa-brands fa-instagram fa-2x" id="colo"></i>
    <i className="fa-brands fa-twitter fa-2x" id="colo"></i>
    <i className="fa-brands fa-youtube fa-2x" id="colo"></i>
     </div>
    <img className="logo" src="https://www.dogtopia.com/wp-content/themes/dogtopia-2018/dist/images/dogtopia-d-logo-white.svg"/>
    <p className="sign" onClick={()=>{navigate("/user-login")}}>Sign in</p>
    <p className="location"  onClick={()=>{navigate("/home")}}>find a location </p>
    </div>
}
export default NavBar;