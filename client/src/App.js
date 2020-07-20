import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile_Card from './components/Profile_Card';
import Profile_Buttons from './components/Profile_Buttons';

import { Container, Row, Col } from 'react-bootstrap';
import Card_Tab from './components/Card_Tab';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Launches/>
      </div>
      <div className = "container">
        <Container>
          <Row>
            <Col>
            <Profile_Card/>
            <br/>
            <Profile_Buttons/>
            </Col>
            <Col>
              <Card_Tab/>
            </Col>
          </Row>
        </Container>
        
        <br/>
        
      </div>
    </ApolloProvider>
  );
}

export default App;
