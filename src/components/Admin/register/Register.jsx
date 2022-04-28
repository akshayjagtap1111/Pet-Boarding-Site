import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import "./Register.css";
import { adminRegister } from "../../../redux/admin_log/action"
import Admin_nav from "../admin_nav/Admin_nav";

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
  return (<>
  <Admin_nav/>
    <div id="register_cover">
      <h1>REGISTER</h1>

      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              {" "}
             Name
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="text"
              placeholder="Enter name"
              value={name}
              name="name"
              onChange={handlechange}
            />
          </div>

     
      <br />


      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              {" "}
              Email
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="text"
              placeholder="Enter email"
              value={email}
              name="email"
              onChange={handlechange}
            />
          </div>
     
     
      <br />

      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              {" "}
             Username
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="text"
        placeholder="Enter username"
        value={username}
        name="username"
        onChange={handlechange}
            />
          </div>

     
      <br />

      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              {" "}
             Password
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="password"
        placeholder="Enter password"
        value={password}
        name="password"
        onChange={handlechange}
            />
          </div>

      
      <br />
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              {" "}
              Phone
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="text"
        placeholder="Enter Phone"
        value={phone}
        name="phone"
        onChange={handlechange}
            />
          </div>
      
      <br />
      <button className="btn btn-primary" onClick={handlesubmit}>REGISTER</button>
    </div>
    </> );
}
