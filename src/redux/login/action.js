import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_FAILUER = "LOGIN_FAILUER";

export const LOGIN_LOADING = "LOGIN_LOADING";

export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN";

export const login_success = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const login_failure = () => {
  return {
    type: LOGIN_FAILUER,
  };
};

export const login_loading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const userLogin = (userDetails) => (dispatch) => {
  console.log(userDetails);

  dispatch(login_loading());
  axios
    .post("http://localhost:5000/user/login", userDetails)
    .then((res) => {
      console.log(".then");
      dispatch(login_success(res.data.token));
    })
    .catch((error) => {
      dispatch(login_failure());
      console.log(".catch");
      if (error.response) {
        alert(error.response.data.message);
      
      }
    });
};

export const userRegister = (userDetails) => (dispatch) => {
  console.log("dispatching........user");

  axios
    .post("http://localhost:5000/user/resister", userDetails)
    .then((res) => {
      return true
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      
      }
    });


};
