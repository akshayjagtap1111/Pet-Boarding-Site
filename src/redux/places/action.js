import axios from "axios";
export const GET_PLACE = "GET_PLACE";
export const GET_PLACE_LOADING = "GET_PLACE_LOADING";
export const GET_PLACE_ERROR = "GET_PLACE_ERROR";

export const get_place = (payload) => {
  return {
    type: GET_PLACE,
    payload,
  };
};

export const get_place_loading = () => {
  return {
    type: GET_PLACE_LOADING,
  };
};

export const get_place_error = () => {
  return {
    type: GET_PLACE_ERROR,
  };
};

export const add_Places = (placeDetails, header) => (dispatch) => {
  axios
    .post("http://localhost:5000/pet-place/add", placeDetails, { headers: header })
    .then((res) => {
      console.log(".then");

    })
    .catch((err) => {
      console.log(".catch");
      console.log(err)
      alert("please enter valid credentials");
    });
};
