import { Box, Button, MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9E58EE",
      main: "#7610EB",
      dark: "#2F0459",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F2E205",
      contrastText: "#000000",
    },
    tertiary: {
      main: "#D98E04",
      contrastText: "#FFFFFF",
    },
    grey: {},
  },
  background: {
    default: "#FAFAFA",
    two: "#F9F9F9",
    three: "#F7F7F7",
    four: "#E9E9EA",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  breakpoints: {
    values: {
      iphone: 375,
      tablet: 640,
      laptop: 1024,
      desktop: 1440,
    },
  },
});

const StyledButton = withStyles({
  root: {
    color: "white",
    backgroundColor: "#7610EB",
    fontSize: "14px",
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  label: {
    fontSize: "3",
    textTransform: "capitalize",
  },
})(Button);

export default function Home_Local() {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <AppBar position="fixed">
                <Launches />
            </AppBar> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        css={{ height: 600 }}
      >
        <StyledButton {...{ to: "/register" }} component={Link}>
          Get Started
        </StyledButton>
      </Box>
    </MuiThemeProvider>
  );
}
