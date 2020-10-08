import { useMutation } from "@apollo/react-hooks";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useForm } from "../hooks";

const StyledButton = withStyles({
  root: {
    color: "#7610EB",
    backgroundColor: "white",
    fontSize: "1rem",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      color: "#7610EB",
    },
    "&:focus": {
      backgroundColor: "white",
      color: "#7610EB",
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

    width: 448,

    "& > *": {
      width: "448px",
      height: "590px",
    },
  },
}));

function Register_Local(props) {
  const classes = useStyles();

  // Using custom hook defined in hooks.js

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#FFFFFF",
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
                Link your Bank.
              </TextTypography1>
            </Box>
            <Box display="flex" justifyContent="center">
              <TextTypography2
                display="fixed"
                className={classes.title}
                variant="subtitle2"
                noWrap
              >
                Surplus links to your bank accounts to look for your
              </TextTypography2>
            </Box>
            <Box display="flex" justifyContent="center">
              <TextTypography2
                display="fixed"
                className={classes.title}
                variant="subtitle2"
                noWrap
                style={{ marginTop: 5 }}
              >
                current subscriptions.
              </TextTypography2>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              style={{ marginTop: 32 }}
            >
              <img src="5sec.gif" style={{ width: 384, height: 287 }}></img>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              style={{ marginTop: 32, marginRight: 32 }}
            >
              <StyledButton {...{ to: "/linkplaid" }} component={Link}>
                Next
              </StyledButton>
            </Box>
          </Paper>
        </div>
      </Box>
    </div>
  );
}

export default Register_Local;
