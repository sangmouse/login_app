import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
