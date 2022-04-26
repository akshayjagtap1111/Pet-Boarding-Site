import { GET_PLACE, GET_PLACE_ERROR, GET_PLACE_LOADING } from "./action";

const initstate = {
  loading: false,
  error: false,
  places: [],
};

export const placesReducer = (state=initstate, { type, payload }) => {
  switch (type) {
    case GET_PLACE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PLACE_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case GET_PLACE:
      return {
        ...state,
        loading:false,
        places: [...payload],
      };
      default:
          return state
  }
};