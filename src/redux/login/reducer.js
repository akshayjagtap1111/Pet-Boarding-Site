import { LOGIN_FAILUER, LOGIN_SUCCESS, LOGIN_LOADING} from "./action";

const initstate = {
  loading: false,
  isAuthenticated: false,
  token: "",
  error: false,
};

export const login_reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: payload,
        error:false
      };
    case LOGIN_FAILUER:
      return {
        ...state,
        error: true,
        isAuthenticated: false,
        token: "",
        loading: false,
      };
    default:
      return state;
  }
};