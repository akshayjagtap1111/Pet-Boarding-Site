import React from "react";
import "./Admin_nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login_failure } from "../../../redux/login/action";

function Log() {
  return (
    <div>
      <Link to="/user-login">
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
    dispatch(login_failure());
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

  const user = useSelector((state) => state.login);
  console.log(user);

  return (
    <div id="home_nav">
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
         Admin Dashboard
        </button>
      </div>

      {user.isAuthenticated ? <Logout /> : <Log />}
    </div>
  );
}
