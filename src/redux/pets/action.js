import axios from "axios"
export const GET_PET = "GET_PET";
export const GET_PET_LOADING = "GET_PET_LOADING";
export const GET_PET_ERROR = "GET_PET_ERROR";

export const get_pet = (payload) => {
  return {
    type: GET_PET,
    payload,
  };
};

export const get_pet_loading = () => {
  return {
    type: GET_PET_LOADING,
  };
};

export const get_pet_error = () => {
  return {
    type: GET_PET_ERROR,
  };
};


export const AddPet =(petDetails ,header)=>(dispatch)=>{

  axios
    .post("http://localhost:5000/pet/add",petDetails, {headers:header})
    .then((res) => {
      console.log(".then");
     
    })
    .catch((err) => {
   
      console.log(".catch");
      // alert("please enter valid credentials");
    });

}

export const getAllPet =(header)=>(dispatch)=>{

    

    dispatch(get_pet_loading());
    axios
      .get("http://localhost:5000/pet/all", {headers:header})
      .then((res) => {
        console.log(".then");
        dispatch(get_pet(res.data));
      })
      .catch((err) => {
        dispatch(get_pet_error());
        console.log(".catch");
        // alert("please enter valid credentials");
      });

}

export const getPendingPet =(header)=>(dispatch)=>{

    

    dispatch(get_pet_loading());
    axios
      .get("http://localhost:5000/pet/pending", {headers:header})
      .then((res) => {
        console.log(".then");
        dispatch(get_pet(res.data));
      })
      .catch((err) => {
        dispatch(get_pet_error());
        console.log(".catch");
        alert("please enter valid credentials");
      });

}

export const getAprovedPet =(header)=>(dispatch)=>{

    

    dispatch(get_pet_loading());
    axios
      .get("http://localhost:5000/pet/approved", {headers:header})
      .then((res) => {
        console.log(".then");
        dispatch(get_pet(res.data));
      })
      .catch((err) => {
        dispatch(get_pet_error());
        console.log(".catch");
        alert("please enter valid credentials");
      });

}

export const DeletePet =(header,id)=>(dispatch)=>{

    

  dispatch(get_pet_loading());
  axios
    .delete(`http://localhost:5000/pet/${id}`, {headers:header})
    .then((res) => {
      console.log(".then");

    })
    .catch((err) => {

      console.log(".catch");
      alert("please enter valid credentials");
    });

}

// {
    // headers: {
    //   'Authorization': 'my secret token'
    // }