import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function AuthenticatedRoute({ component: C, ...rest }) {
  const { user, logout } = useContext(AuthContext);
  const isAuthenticated = user ? true : false;

  console.log("from auth", user);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <C {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
