
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import "./Register.css";
import { userRegister } from "../../../redux/login/action";

export default function UserRegister()  {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  
  const initstate = {
    name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
  };

  const [user, setuser] = React.useState(initstate);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setuser((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async () => {

   
    //  dispatch(userRegister(user))

    axios
    .post("http://localhost:5000/user/resister", user)
    .then((res) => {
      alert("successfully registered...please log in")
     navigate("/user-login")
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      
      }
    });
   
 

  };
  const { name,  email, username, password ,phone} = user;
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
