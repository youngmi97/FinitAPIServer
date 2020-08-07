import React, { useContext, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import "../App.css";
import { useForm } from "../hooks";

import { AuthContext } from '../context/auth';

function Login(props) {
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});

  const initialState = {
    email: "",
    password: ""
  };

  // Using custom hook defined in hooks.js
  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    // this function will be triggered if mutation is executed successfully
    update(_, { data: { signIn : userData } }) {
      //redirect to home page
      console.log("userData", userData);
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      console.log("graphQlErrors", err.graphQLErrors);
      //console.log(err.graphQLErrors[0].extensions.exception.details);
      // have to add error fields as well
      // password --> err.graphQLErrors[0].extensions.message
      if (err.graphQLErrors[0].extensions.exception.hasOwnProperty("details")) {
        err.graphQLErrors[0].extensions.exception.details.forEach((element) =>
          setErrors({ ...errors, [element.context.key]: element.message })
        );
      } else {
            const msg = err.graphQLErrors[0].message;
            const errStr = msg.split(' ')[1];
            const errKey = errStr.substr(0, errStr.length - 1).toLowerCase();
            setErrors({
                ...errors,
                [errKey]: err.graphQLErrors[0].message,
            });
      }
      console.log("errors", errors);
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
        <h1>Login</h1>
        <Form.Input
          label="Email"
          placeholder="Email..."
          name="email"
          type="email"
          value={values.email}
          error={errors.email ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Password"
          placeholder="Password..."
          name="password"
          type="password"
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const LOGIN_USER = gql`
  mutation signIn(
    $email: String!
    $password: String!
  ) {
    signIn(
      email: $email
      password: $password
    ) {
      id
      email
      username
      name
    }
  }
`;

export default Login;