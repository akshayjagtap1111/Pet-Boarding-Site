import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import "./Register.css";
import { adminRegister } from "../../../redux/admin_log/action"

export default function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  
  const initstate = {
    name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
  };

  const [admin, setadmin] = React.useState(initstate);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setadmin((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = () => {

    dispatch(adminRegister(admin))
  };
  const { name,  email, username, password ,phone} = admin;
  return (
    <div id="login_cover">
      <h1>REGISTER</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        name="name"
        onChange={handlechange}
      />
      <br />
     
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        name="email"
        onChange={handlechange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        name="username"
        onChange={handlechange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        name="password"
        onChange={handlechange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        name="phone"
        onChange={handlechange}
      />
      <br />
      <button onClick={handlesubmit}>REGISTER</button>
    </div>
  );
}
