import React from "react";
import "./Admin_nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { admin_login_failure } from "../../../redux/admin_log/action";

function Log() {
  return (
    <div>
      <Link to="/admin-login">
        <button
          className="btn btn-primary active"
          data-bs-toggle="button"
          autocomplete="off"
          aria-pressed="true"
        >
          Login
        </button>
      </Link>
    </div>
  );
}

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(admin_login_failure());
  };
  return (
    <div>
      <button
        className="btn btn-primary active"
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default function () {
  const navigate = useNavigate();

  const admin = useSelector((state) => state.admin);
  // console.log(admin);

  return (
    <div id="home_nav">
        <div>
      <img src="https://m.media-amazon.com/images/I/61TQ4qebeBL._AC_SS450_.jpg" style={{width:"40px", height:"40px"}}/>
    </div>

      <div>
  
      <div>
        <button
          className="btn btn-primary active"
          data-bs-toggle="button"
          autocomplete="off"
          aria-pressed="true"
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </button>
      </div>
      <div id="Dashboard_btn">
        <button
          className="btn btn-primary active"
          data-bs-toggle="button"
          autocomplete="off"
          aria-pressed="true"
          onClick={() => {
            navigate("/admin-dashboard");
          }}
        >
          Admin
        </button>
      </div>

      {admin.isAuthenticated ? <Logout /> : <Log />}
    </div>
    </div>
  );
}
