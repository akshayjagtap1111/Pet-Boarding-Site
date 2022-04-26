import React from "react";
import "./Home_nav.css";
import { Link ,useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { login_failure } from "../../redux/login/action";

function Log() {
  return (
    <div>
      <Link to="/user-login">
        <button>Login</button>
      </Link>
    </div>
  );
}

function Logout() {

   const dispatch = useDispatch()

    const handleLogout = ()=>{
        dispatch(login_failure())
    }
  return <div>
      <button onClick={handleLogout}>Logout</button>

  </div>;
}

export default function () {
    const navigate = useNavigate()

    const user = useSelector((state) => state.login);
    console.log(user)

  return <div id="home_nav">

      <button onClick={()=>{navigate("/")}}>home</button>
      {user.isAuthenticated ?<Logout /> :<Log/> }
      
      </div>;
}
