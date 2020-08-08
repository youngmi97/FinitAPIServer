import React from "react";
//import ApolloClient from 'apollo-boost';
//import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

import Home_Local from "./pages/Home_Local";
import Login_Local from "./pages/Login_Local";
import Register_Local from "./pages/Register_Local";
import Main_Active from "./components/Main_Active";
import Main_Insight from "./components/Main_Insight";

import MenuBar from "./components/MenuBar";
import { AuthProvider } from "./context/auth";

function App() {
	return (
		<AuthProvider>
			<Router>
				<MenuBar />
				<Route exact path="/subscriptions" component={Main_Active} />
				<Route exact path="/discover" component={Main_Insight} />
				<Route exact path="/" component={Home_Local} />
				<Route exact path="/login" component={Login_Local} />
				<Route exact path="/register" component={Register_Local} />
			</Router>
		</AuthProvider>
	);
}

export default App;
