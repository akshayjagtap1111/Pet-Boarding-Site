import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css";
import { userRegister } from "../../../redux/login/action";
import Home_nav from "../../home/Home_nav";

export default function UserRegister() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      .post("https://pet-care-boarding.herokuapp.com/user/resister", user)
      .then((res) => {
        alert("successfully registered...please log in");
        navigate("/user-login");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };
  const { name, email, username, password, phone } = user;
  return (
    <>
      <Home_nav />
      <div id="register_cover">
        <h1>REGISTER</h1>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            {" "}
            Breed
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
            Breed
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
            Breed
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
            Breed
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
            Breed
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
        <button className="btn btn-primary" onClick={handlesubmit}>
          REGISTER
        </button>
      </div>
    </>
  );
}
