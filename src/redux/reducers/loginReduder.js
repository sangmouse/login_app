import * as type from "./../TypeAction";

const initialState = {
  loading: false,
  userData: {
    username: null,
    password: null,
  },
  error: null,
  token: "",
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
      // console.log(action.message)
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return state;
  }
}
