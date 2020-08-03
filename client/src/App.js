import React, { useState } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Launches from './components/Launches';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile_Card from './components/Profile_Card';
import Profile_Buttons from './components/Profile_Buttons';
import Paper from '@material-ui/core/Paper';
import { Container, Row, Col } from 'react-bootstrap';
import Card_Tab from './components/Card_Tab';
import Main_Active from './components/Main_Active';
import Main_Insight from './components/Main_Insight';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});


function App() {


  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route exact path="/" component={Main_Active}/>
        <Route path="/Insight" component={Main_Insight}/>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
