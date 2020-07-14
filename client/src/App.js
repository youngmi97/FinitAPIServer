import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1> FINIT </h1>
        <Launches/>
      </div>
    </ApolloProvider>
  );
}

export default App;
