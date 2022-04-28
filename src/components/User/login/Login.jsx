
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin} from "../../../redux/login/action";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Home_nav from "../../home/Home_nav";
import "./Login.css"

export default function UserLogin()  {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.login);
  console.log(user);

  React.useEffect(()=>{
    
    if(user.isAuthenticated){
      navigate("/")
    }
  })
  

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
     dispatch(userLogin(logData)) 
     
  };

 

 
  const { username, password } = logData;
  return (
    <div>
      <Home_nav/>
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

      <br></br>

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

           
      <br></br>
      <br />

    <Link to="/user-register"> Dont have account...? create One</Link>

    <br />
    <Link to="/admin-login">@ Workspace Admin</Link>
</div>

    </div>
  );
}
