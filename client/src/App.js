import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Main from "./components/Main";
import MainShared from "./components/MainShared";
import Mainupcoming from "./components/Mainupcoming";
import MainInsight from "./components/MainInsight";
import MainWallet from "./components/MainWallet";
import MenuBar from "./components/MenuBar";
import { AuthProvider } from "./context/auth";
import Home_Local from "./pages/Home_Local";
import Login_Local from "./pages/Login_Local";
import Register_Local from "./pages/Register_Local";
import Link_Local from "./pages/Link_Local";
import Linkplaid_Local from "./pages/Linkplaid_Local";
import { Sticky } from "semantic-ui-react";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./routes/UnauthenticatedRoute";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9E58EE",
      main: "#7610EB",
      dark: "#2F0459",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#9E58EE",
      main: "#7610EB",
      dark: "#2F0459",
      contrastText: "#FFFFFF",
    },
    grey: {
      main: "#666666",
      grey4: "#EFEFF4",
    },
    background: {
      default: "#000000",
      paper: "#FAFAFA",
    },
  },
  background: {
    default: "#FAFAFA",
    two: "#F9F9F9",
    three: "#F7F7F7",
    four: "#E9E9EA",
    grey: "#E5E5E5",
  },

  breakpoints: {
    values: {
      iphone: 375,
      tablet: 640,
      laptop: 1024,
      desktop: 1440,
    },
  },

  overrides: {
    MuiCardContent: {
      root: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 20,
        },
      },
    },
    MuiButton: {
      root: {
        fontSize: "17px",
        borderRadius: 8,
        padding: "0 16px",
        // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        "&:focus": {
          outline: "none",
        },
      },
      outlined: {
        fontWeight: 600,
        Color: "#8a8a8f",
        borderWidth: 2,
        borderColor: "#8a8a8f",
        borderRadius: 20,
        Height: 32,
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiToolbar: {
      dense: {
        minHeight: 40,
      },
    },
    MuiIconButton: {
      root: {
        width: 40,
        height: 40,
        alignItems: "center",
        // alignSelf: "flex-end",
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiButtonBase: {
      root: {
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiInputBase: {
      root: {},
    },
    MuiTypography: {
      root: {
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
      h1: {
        /* Heading 1 [17] SB */
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
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "72px",
      },

      h2: {
        /* Heading 2 [14] SB */
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
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 16,
      },
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <div
        style={{
          backgroundColor: "#FAFAFA",
          height: "100vh",
        }}
      >
        <Router>
          <div>
            <Sticky>
              <MenuBar />
            </Sticky>
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 50,
              top: "60px",
              backgroundColor: "#fafafa",
            }}
          >
            <ThemeProvider theme={theme}>
              {/* <Route exact path="/subscriptions" component={Main} /> */}
              <AuthenticatedRoute
                exact
                path="/subscriptions"
                component={Main}
              />
              <AuthenticatedRoute exact path="/shared" component={MainShared} />
              <AuthenticatedRoute exact path="/wallet" component={MainWallet} />
              <AuthenticatedRoute
                exact
                path="/upcoming"
                component={Mainupcoming}
              />
              <AuthenticatedRoute
                exact
                path="/insight"
                component={MainInsight}
              />
              <UnauthenticatedRoute exact path="/" component={Home_Local} />
              <UnauthenticatedRoute
                exact
                path="/login"
                component={Login_Local}
              />
              <UnauthenticatedRoute
                exact
                path="/register"
                component={Register_Local}
              />
              <UnauthenticatedRoute exact path="/link" component={Link_Local} />
              <UnauthenticatedRoute
                exact
                path="/linkplaid"
                component={Linkplaid_Local}
              />
            </ThemeProvider>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
