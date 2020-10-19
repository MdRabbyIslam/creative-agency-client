import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import RabbyTask from "./RabbyTask";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    isLogged: false,
    email: "",
    adminOrUser: "",
  });
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route path="/assignment11/task" component={RabbyTask} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
