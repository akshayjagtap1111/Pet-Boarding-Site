import { ADMIN_LOGIN_FAILUER, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_LOADING} from "./action";

const initstate = {
  loading: false,
  isAuthenticated: false,
  token: "",
  error: false,
};

export const admin_login_reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: payload,
        error:false
      };
    case ADMIN_LOGIN_FAILUER:
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