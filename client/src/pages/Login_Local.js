import { useMutation } from "@apollo/react-hooks";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Typography,
  // Grid,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import "../App.css";
import { AuthContext } from "../context/auth";
import { useForm } from "../hooks";

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
    "& > *": {
      width: "448px",
      height: "500px",
    },
  },
}));

function Login_Local(props) {
  const classes = useStyles();

  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});

  const initialState = {
    email: "",
    password: "",
  };

  // Using custom hook defined in hooks.js
  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    // this function will be triggered if mutation is executed successfully
    update(_, { data: { signIn: userData } }) {
      //redirect to home page
      console.log("userData", userData);
      context.login(userData);
      props.history.push("/subscriptions");
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
        const errStr = msg.split(" ")[1];
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
    <Box display="flex" justifyContent="center">
      <div className={classes.root}>
        <Paper variant="outlined">
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
              Welcome Back.
            </TextTypography1>
          </Box>
          <Box display="flex" justifyContent="center">
            <TextTypography2
              display="fixed"
              className={classes.title}
              variant="subtitle2"
              noWrap
            >
              Stay on top of your subscriptions with Surplus.
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
              <Box display="flex" justifyContent="center">
                <StyledButton type="submit">Login</StyledButton>
              </Box>
            </Form>
          </Box>

          <Box
            display="flex"
            justifyContent="flex_start"
            marginLeft="41px"
            marginRight="41px"
          >
            <PurpleTextTypography2
              display="fixed"
              className={classes.title}
              variant="subtitle2"
              noWrap
            >
              Forgot your email?
            </PurpleTextTypography2>
          </Box>
          <Box display="flex" marginLeft="41px" marginTop="30px">
            <Box margin="0px">
              <TextTypography4
                display="fixed"
                className={classes.title}
                variant="subtitle2"
                noWrap
              >
                Not a member?
              </TextTypography4>
            </Box>
            <Box marginLeft="5px">
              <StyledButton1 {...{ to: "/register" }} component={Link}>
                Create One
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
    </Box>
  );
}

const LOGIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
      username
      name
    }
  }
`;

export default Login_Local;
