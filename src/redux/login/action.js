import axios from "axios"

export const LOGIN_SUCCESS="LOGIN_SUCCESS"

export const LOGIN_FAILUER="LOGIN_FAILUER"

export const LOGIN_LOADING="LOGIN_LOADING"

export const ADMIN_LOGIN_SUCCESS="ADMIN_LOGIN"


export const login_success = (payload)=>{

    return {
        type:LOGIN_SUCCESS,
        payload
    }
}


export const login_failure=()=>{

    return {
        type:LOGIN_FAILUER
    }
}

export const login_loading =()=>{
    return {
        type:LOGIN_LOADING
    }
}


export const userLogin =(userDetails)=>(dispatch)=>{

    console.log(userDetails)

    dispatch(login_loading());
    axios
      .post("http://localhost:5000/user/login", userDetails)
      .then((res) => {
        console.log(".then");
        dispatch(login_success(res.data.token));
      })
      .catch((err) => {
        dispatch(login_failure());
        console.log(".catch");
        alert("please enter valid credentials");
      });

}

export const userRegister =(userDetails)=>(dispatch)=>{

    console.log(userDetails)

    console.log("dispatching........user")

    axios
      .post("http://localhost:5000/user/resister", userDetails)
      .then((res) => {
        console.log(".then");
     
      })
      .catch((err) => {
        console.log(".catch");
       
      });

}







