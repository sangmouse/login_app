import * as type from "./../TypeAction";

const loginRequest = (username, password) => {
  return {
    type: type.LOGIN_REQUESTED,
    payload: {
      username: username,
      password: password,
    },
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

export { loginRequest, loginSucced, loginFailed, onLogout };
