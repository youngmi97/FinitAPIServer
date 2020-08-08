import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import { createMuiTheme, ThemeProvider, fade } from "@material-ui/core/styles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloProvider from "./ApolloProvider";
const theme = createMuiTheme({
	breakpoints: {
		values: {
			iphone: 375,
			tablet: 640,
			laptop: 1024,
			desktop: 1440,
		},
	},
});

const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
