import axios from "axios"

export const ADMIN_LOGIN_SUCCESS="ADMIN_LOGIN_SUCCESS"

export const ADMIN_LOGIN_FAILUER="ADMIN_LOGIN_FAILUER"

export const ADMIN_LOGIN_LOADING="ADMIN_LOGIN_LOADING"




export const admin_login_success = (payload)=>{

    return {
        type:ADMIN_LOGIN_SUCCESS,
        payload
    }
}


export const admin_login_failure=()=>{

    return {
        type:ADMIN_LOGIN_FAILUER
    }
}

export const admin_login_loading =()=>{
    return {
        type:ADMIN_LOGIN_LOADING
    }
}




export const adminRegister =(userDetails)=>(dispatch)=>{

  console.log(userDetails)

  console.log("dispatching........")

  axios
    .post("http://localhost:5000/user/resister-admin", userDetails)
    .then((res) => {
      console.log(".then");
   
    })
    .catch((err) => {
      dispatch(admin_login_failure());
      console.log(".catch");
     
    });

}



export const adminLogin =(userDetails)=>(dispatch)=>{

    console.log(userDetails)

    dispatch(admin_login_loading());
    axios
      .post("http://localhost:5000/user/login-admin", userDetails)
      .then((res) => {
        console.log(".then");
        dispatch(admin_login_success(res.data.token));
      })
      .catch((err) => {
        dispatch(admin_login_failure());
        console.log(".catch");
        alert("please enter valid credentials");
      });

}
