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
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../context/auth";
import { useForm } from "../hooks";
import { TextField } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#7610Eb",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#7610Eb",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#7610Eb",
      },
    },
  },
})(TextField);

const StyledButton = withStyles({
  root: {
    color: "white",
    backgroundColor: "#7610EB",
    fontSize: "1rem",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    "&:hover": {
      backgroundColor: "#5C0DB8",
      color: "white",
    },
    "&:focus": {
      backgroundColor: "#430985",
      color: "white",
    },
  },
  label: {
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "capitalize",
  },
})(Button);
const StyledButton1 = withStyles({
  root: {
    color: "#7610EB",
    fontSize: "0.8rem",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 30,
  },
  label: {
    fontSize: "14px",
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
    color: "grey",
    marginTop: 30,
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "100px",
    width: "448",
    height: "50",
    "& > *": {
      width: "448px",
      height: "530px",
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
    <div
      style={{
        height: "100vh",
        backgroundColor: "#FFFFFF",
        top: "60px",
      }}
    >
      <Box display="flex" justifyContent="center">
        <div className={classes.root}>
          <Paper
            variant="outlined"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
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
              <form
                onSubmit={onSubmit}
                noValidate
                className={loading ? "loading" : ""}
              >
                <CssTextField
                  name="email"
                  type="email"
                  value={values.email}
                  error={errors.email ? true : false}
                  onChange={onChange}
                  style={{
                    width: "366px",
                    height: "54px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    margin: 10,
                  }}
                  variant="outlined"
                  label="Email or Phone"
                />
                <CssTextField
                  name="password"
                  type="password"
                  value={values.password}
                  error={errors.password ? true : false}
                  onChange={onChange}
                  style={{
                    width: "366px",
                    height: "54px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    margin: 10,
                  }}
                  variant="outlined"
                  label="Password"
                />
                <Button
                  style={{ margin: 0, padding: 0, textTransform: "none" }}
                >
                  <Typography
                    style={{
                      color: "#7610EB",
                      marginLeft: 10,
                      padding: 0,
                      fontSize: 14,
                    }}
                  >
                    Forgot your email or password?
                  </Typography>
                </Button>
                <Box
                  display="flex"
                  alignItems="center"
                  marginLeft="10px"
                  marginRight="10px"
                >
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
                  <Box marginLeft="5px" flexGrow={1}>
                    <StyledButton1 {...{ to: "/register" }} component={Link}>
                      Create One
                    </StyledButton1>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <StyledButton type="submit">Log In</StyledButton>
                  </Box>
                </Box>
              </form>
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
    </div>
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
