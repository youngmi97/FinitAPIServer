import React from "react";
//import ApolloClient from 'apollo-boost';
//import {ApolloProvider} from 'react-apollo';
import { createMuiTheme, ThemeProvider, fade } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

import Home_Local from "./pages/Home_Local";
import Login_Local from "./pages/Login_Local";
import Register_Local from "./pages/Register_Local";
import Main from "./components/Main";
import Main_Insight from "./components/Main_Insight";

import MenuBar from "./components/MenuBar";
import { AuthProvider } from "./context/auth";

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
  overrides: {
    MuiButton: {
      root: {
        fontSize: "17px",
        borderRadius: 4,
        padding: "0 16px",
        // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      },
      outlined: {
        fontWeight: 600,
        Color: "#8a8a8f",
        borderWidth: 2,
        borderColor: "#8a8a8f",
        borderRadius: 20,
        Height: 32,
      },
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <MenuBar />
          <Route exact path="/subscriptions" component={Main} />
          <Route exact path="/discover" component={Main_Insight} />
          <Route exact path="/" component={Home_Local} />
          <Route exact path="/login" component={Login_Local} />
          <Route exact path="/register" component={Register_Local} />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
