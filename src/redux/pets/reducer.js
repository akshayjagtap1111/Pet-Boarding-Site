import { GET_PET, GET_PET_ERROR, GET_PET_LOADING } from "./action";

const initstate = {
  loading: false,
  error: false,
  pets: [],
};

export const petsReducer = (state=initstate, { type, payload }) => {
  switch (type) {
    case GET_PET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PET_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case GET_PET:
      return {
        ...state,
        loading:false,
        pets: [...payload],
      };
      default:
          return state
  }
};