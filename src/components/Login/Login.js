import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useHistory } from "react-router";
import { loginRequest } from "./../../redux/actions/index";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated } = props.isAuthenticated;

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(username, password));
  };

  useEffect(() => {
    const isToken = localStorage.getItem("token");

    if (isToken && isAuthenticated) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="login-app">
        <form className="form-login" onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              required
              className="form-control"
              id="username"
              onChange={onChangeUsername}
              placeholder="Enter username"
              type="text"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              onChange={onChangePassword}
              required
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              autoComplete="off"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

const mapState = (state) => ({
  tokenLogin: state.login,
  isAuthenticated: state.home,
});

export default connect(mapState)(Login);
