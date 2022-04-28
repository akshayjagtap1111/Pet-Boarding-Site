

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { adminLogin } from "../../../redux/admin_log/action";
import { Navigate, useNavigate, Link} from "react-router-dom";
import Admin_nav from "../admin_nav/Admin_nav";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function nav(){
    navigate("/admin-dashboard")
  }

 
  const initialState = {
    username: "",
    password: "",
  };

  const [logData, setlogData] = React.useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setlogData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handlesubmit = () => { 
     dispatch(adminLogin(logData,nav)) 
  };

 
  const { username, password } = logData;
  return (
    <div>
      <Admin_nav/>
<div id="login_box">
<div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon3"> username</span>
    <input  className="form-control" id="basic-url" aria-describedby="basic-addon3"
        type="text"
        placeholder="enter username"
        name="username"
        value={username}
        onChange={handleChange}
      />
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon3"> Password</span>
    <input  className="form-control" id="basic-url" aria-describedby="basic-addon3"
      
       type="password"
       placeholder="enter password"
       name="password"
       value={password}
       onChange={handleChange}
      />
  </div>
  <br />
  <button className="btn btn-primary" onClick={handlesubmit}>Login</button>

</div>
     

    <Link to="/admin-register"> Create admin </Link>
    </div>
  );
}
