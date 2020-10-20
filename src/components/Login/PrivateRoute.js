import React from "react";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const loggedEmail = sessionStorage.getItem("email");
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
