import * as type from "./../TypeAction";

const loginRequest = (email, password) => {
  return {
    type: type.LOGIN_REQUESTED,
    payload: {
      email: email,
      password: password,
    },
  };
};
const registerRequest = (username, email,  password) => {
  return {
    type: type.REGISTER_REQUEST,
    payload: {
      username: username,
      email: email,
      password: password
    }
  };
};
const registerSucced = () => {
  return {
    type: type.REGISTER_SUCCESSED,
    
  };
};
const registerFailed = (data) => {
  return {
    type: type.REGISTER_FAILED,
    data
  };
};
const onUpdateStatusError = (data) => {
  return {
    type: type.UPDATE_STATUS_ERROR,
    data
  };
};

const loginSucced = (data) => {
  return {
    type: type.LOGIN_SUCCESSED,
    data,
  };
};
const loginFailed = (message) => {
  return {
    type: type.LOGIN_FAILED,
    message,
  };
};

const onLogout = () => {
  return {
    type: type.LOGOUT,
  };
};

export { loginRequest, loginSucced, loginFailed, onLogout, registerRequest, registerSucced,  registerFailed, onUpdateStatusError};
