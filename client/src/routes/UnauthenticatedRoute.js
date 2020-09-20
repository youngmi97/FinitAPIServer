import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function UnauthenticatedRoute({ component: C, ...rest }) {
  const { user, logout } = useContext(AuthContext);
  const isAuthenticated = user ? true : false;

  console.log("from unauth", user);
  // user is set to null??? after redirect

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to="/subscriptions" /> : <C {...props} />
      }
    />
  );
}
