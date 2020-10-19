import React from "react";
import { useContext } from "react";

import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const loggedEmail = sessionStorage.getItem("email");
  const adminOrUser = sessionStorage.getItem("adminOrUser");
  console.log(loggedEmail, adminOrUser);
  const [userInfo] = useContext(UserContext);
  console.log(userInfo.isLogged);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedEmail ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
