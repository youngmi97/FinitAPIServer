import React, { useContext, useState } from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Launches from "../components/Home_Login_AppBar";
import {
  Paper,
  MuiThemeProvider,
  Container,
  Box,
  Button,
  Typography,
  Avatar,
  TextField,
} from "@material-ui/core";
import { Form } from "semantic-ui-react";

import { createMuiTheme } from "@material-ui/core/styles";
import { Link, LinkProps } from "react-router-dom";

import { useForm } from "../hooks";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../context/auth";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
  },
});
const StyledButton = withStyles({
  root: {
    color: "white",
    backgroundColor: "#7610EB",
    fontSize: "1rem",
    paddingLeft: 20,
    paddingRight: 20,
  },
  label: {
    fontSize: "3",
    textTransform: "capitalize",
  },
})(Button);
const StyledButton1 = withStyles({
  root: {
    color: "#7610EB",
    fontSize: "0.8rem",
    marginTop: "4px",
    paddingLeft: 5,
    paddingRight: 5,
  },
  label: {
    fontSize: "3",
    textTransform: "capitalize",
  },
})(Button);

const PurpleTextTypography1 = withStyles({
  root: {
    marginTop: "48px",
    color: "#7610EB",
  },
})(Typography);

const PurpleTextTypography2 = withStyles({
  root: {
    marginTop: "10px",
    color: "#7610EB",
  },
})(Typography);
const TextTypography1 = withStyles({
  root: {
    marginTop: "20px",
    color: "#000000",
  },
})(Typography);

const TextTypography2 = withStyles({
  root: {
    marginTop: "16px",
    color: "#000000",
  },
})(Typography);

const TextTypography3 = withStyles({
  root: {
    marginTop: "20px",
    color: "grey",
  },
})(Typography);
const TextTypography4 = withStyles({
  root: {
    marginTop: "10px",
    color: "grey",
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "100px",
    marginLeft: "496px",
    "& > *": {
      width: "448px",
      height: "590px",
    },
  },
}));

function Register_Local(props) {
  const classes = useStyles();

  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const initialState = {
    username: "",
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  // Using custom hook defined in hooks.js
  const { onChange, onSubmit, values } = useForm(registerUser, initialState);

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    // this function will be triggered if mutation is executed successfully
    update(_, { data: { signUp: userData } }) {
      //redirect to home page
      context.login(userData);
      props.history.push("/subscriptions");
    },
    onError(err) {
      console.log("graphQlErrors", err.graphQLErrors);
      //console.log(err.graphQLErrors[0].extensions.exception.details);
      // have to add error fields as well
      if (err.graphQLErrors[0].extensions.exception.hasOwnProperty("details")) {
        err.graphQLErrors[0].extensions.exception.details.forEach((element) =>
          setErrors({ ...errors, [element.context.key]: element.message })
        );
      } else {
        const errKey = Object.keys(
          err.graphQLErrors[0].extensions.exception.errors
        )[0];
        setErrors({
          ...errors,
          [errKey]: err.graphQLErrors[0].extensions.exception.stacktrace[0],
        });
      }
      console.log("errors", errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className={classes.root}>
      <Paper variant="outlined" style={{ height: "700px" }}>
        <Box display="flex" justifyContent="center">
          <PurpleTextTypography1
            display="fixed"
            className={classes.title}
            variant="h6"
            noWrap
          >
            surPlus
          </PurpleTextTypography1>
        </Box>
        <Box display="flex" justifyContent="center">
          <TextTypography1
            display="fixed"
            className={classes.title}
            variant="h6"
            noWrap
          >
            Join Surplus.
          </TextTypography1>
        </Box>
        <Box display="flex" justifyContent="center">
          <TextTypography2
            display="fixed"
            className={classes.title}
            variant="subtitle2"
            noWrap
          >
            Create an account to stay on top of your subscriptions.
          </TextTypography2>
        </Box>
        <Box display="flex" justifyContent="center" marginTop="24px">
          <Box p={1}>
            <Avatar variant="circle" src="Facebook.svg" />
          </Box>
          <Box p={1}>
            <Avatar variant="circle" src="Google New.svg" />
          </Box>
          <Box p={1}>
            <Avatar variant="circle" src="Apple.svg" />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <TextTypography3
            display="fixed"
            className={classes.title}
            variant="subtitle2"
            noWrap
          >
            OR
          </TextTypography3>
        </Box>

        <Box display="flex" justifyContent="center">
          <Form
            onSubmit={onSubmit}
            noValidate
            className={loading ? "loading" : ""}
          >
            <Form.Input
              label="Email"
              placeholder="Email..."
              name="email"
              type="email"
              value={values.email}
              error={errors.email ? true : false}
              onChange={onChange}
              style={{
                width: "300px",
              }}
            />

            <Form.Input
              label="Name"
              placeholder="Name..."
              name="name"
              type="text"
              value={values.name}
              error={errors.name ? true : false}
              onChange={onChange}
              style={{
                width: "300px",
              }}
            />
            <Form.Input
              label="Username"
              placeholder="Username..."
              name="username"
              type="text"
              value={values.username}
              error={errors.username ? true : false}
              onChange={onChange}
              style={{
                width: "300px",
              }}
            />
            <Form.Input
              label="Password"
              placeholder="Password..."
              name="password"
              type="password"
              value={values.password}
              error={errors.password ? true : false}
              onChange={onChange}
              style={{
                width: "300px",
              }}
            />
            <Form.Input
              label="Confirm Password"
              placeholder="Confirm Password..."
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              error={errors.confirmPassword ? true : false}
              onChange={onChange}
              style={{
                width: "300px",
              }}
            />
            <Box display="flex" justifyContent="center">
              <StyledButton type="submit">Register</StyledButton>
            </Box>
          </Form>
        </Box>

        <Box display="flex" marginLeft="41px" marginTop="30px">
          <Box margin="0px">
            <TextTypography4
              display="fixed"
              className={classes.title}
              variant="subtitle2"
              noWrap
            >
              Already a member?
            </TextTypography4>
          </Box>
          <Box marginLeft="5px">
            <StyledButton1 {...{ to: "/login" }} component={Link}>
              Log In
            </StyledButton1>
          </Box>
        </Box>
        <Box display="flex" marginLeft="41px" marginTop="30px">
          {Object.keys(errors).length > 0 && (
            <div className="ui error message">
              <ul className="list">
                {Object.values(errors).map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          )}
        </Box>
      </Paper>
    </div>
  );
}

const REGISTER_USER = gql`
  mutation signUp(
    $email: String!
    $username: String!
    $name: String!
    $password: String!
  ) {
    signUp(
      email: $email
      username: $username
      name: $name
      password: $password
    ) {
      id
      email
      username
      name
    }
  }
`;

export default Register_Local;
