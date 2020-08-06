import React from 'react';
//import ApolloClient from 'apollo-boost';
//import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";

import MenuBar from "./components/MenuBar";
import { AuthProvider } from './context/auth';


function App() {
  return (
    <AuthProvider>
      <Router>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    </AuthProvider>
  );
}

export default App;
