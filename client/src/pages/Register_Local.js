import { useMutation } from "@apollo/react-hooks";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Typography,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useForm } from "../hooks";

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
    marginTop: 30,

    color: "grey",
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "120px",
    width: 448,

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
    name: "",
    username: "",
    email: "",
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
      props.history.push("/link");
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
              height: "700px",
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
              <form
                onSubmit={onSubmit}
                noValidate
                className={loading ? "loading" : ""}
              >
                <Box display="flex" p={1} style={{ margin: 10, padding: 0 }}>
                  <Box p={1} style={{ margin: 0, padding: 0 }}>
                    <CssTextField
                      name="name"
                      type="name"
                      value={values.name}
                      error={errors.name ? true : false}
                      onChange={onChange}
                      style={{
                        width: "179px",
                        height: "54px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      variant="outlined"
                      label="First Name"
                    />
                  </Box>
                  <Box p={1} style={{ marginLeft: 8, padding: 0 }}>
                    <CssTextField
                      name="username"
                      type="name"
                      value={values.username}
                      error={errors.username ? true : false}
                      onChange={onChange}
                      style={{
                        width: "179px",
                        height: "54px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      variant="outlined"
                      label="Last Name"
                    />
                  </Box>
                </Box>

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
                <CssTextField
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  error={errors.confirmPassword ? true : false}
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
                  label="Confirm Password"
                />
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
                      Already a member?
                    </TextTypography4>
                  </Box>
                  <Box marginLeft="0px" flexGrow={1}>
                    <StyledButton1 {...{ to: "/login" }} component={Link}>
                      Log In
                    </StyledButton1>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <StyledButton type="submit">Continue</StyledButton>
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
            {loading ? (
              <CircularProgress style={{ marginLeft: 150 }} />
            ) : (
              <div />
            )}
          </Paper>
        </div>
      </Box>
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
