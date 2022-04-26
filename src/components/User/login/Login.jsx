
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin} from "../../../redux/login/action";
import { Navigate, useNavigate } from "react-router-dom";

export default function UserLogin()  {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const admin = useSelector((state) => state.admin);
  console.log(admin);
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

      <input
        type="text"
        placeholder="enter username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        placeholder="enter password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handlesubmit}>Login</button>

    
    </div>
  );
}
