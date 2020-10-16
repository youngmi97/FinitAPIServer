import { useMutation } from "@apollo/react-hooks";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Typography,
  TextField,
  Snackbar,
  SnackbarContent,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import React, { useContext, useState } from "react";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useForm } from "../hooks";
import { ToastContainer, toast } from "react-toastify";

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
    marginTop: "40px",
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
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function Register_Local(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(true);
  const handleClose = () => {
    setState(false);
  };
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Snackbar
        open={state}
        TransitionComponent={Fade}
        style={{ marginTop: 60 }}
        onClose={handleClose}
        autoHideDuration={4000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SnackbarContent
          style={{
            backgroundColor: "#7610EB",
            color: "White",
            maxWidth: 170,
            height: 36,
            justifyContent: "center",
            borderRadius: 8,
            boxShadow: "0px 8px 24px rgba(47, 4, 89, 0.25)",
          }}
          message={<span id="client-snackbar">Sign Up Success! 👍</span>}
        />
      </Snackbar>
      <Box display="flex" justifyContent="center">
        <div className={classes.root}>
          <Paper
            variant="outlined"
            style={{
              height: "700px",
              marginTop: 92,
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
