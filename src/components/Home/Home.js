import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { onLogout } from "../../redux/actions/index";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onHandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(onLogout());

    const isToken = localStorage.getItem("token");

    if (!isToken) {
      history.push("/login");
    }
  };

  return (
    <>
      <div className="login-app">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onHandleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
