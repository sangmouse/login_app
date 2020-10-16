import * as type from "./../TypeAction";

const initialState = {
  loading: false,
  userData: {
    username: null,
    password: null,
  },
  error: false,
  token: "",
  message: ""
};

export default function loginReduder(state = initialState, action) {

  
  switch (action.type) {
    case type.LOGIN_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.LOGIN_SUCCESSED:
      localStorage.setItem("token", JSON.stringify(action.data));
      
      return {
        ...state,
        loading: false,
        token: action.data,
      };

    case type.LOGIN_FAILED:
      
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message
      };

      case type.UPDATE_STATUS_ERROR:
      return {
        error: action.data,
      };

      break;




    default:
      return state;
  }
}
