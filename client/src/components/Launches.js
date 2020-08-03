import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Navigation_Button from './Navigation_Button'
import Navigation_Search from './Navigation_Search'
import { Container, Row, Col, Navbar, NavbarBrand, NavLink, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Test1 from './Test1'
import Navigation_Profile from './Navigation_Profile';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends Component {
    render() {
        return (
          <Fragment>
            <Container>
              <Row>
                <Col>
                <Navigation_Button/>
                </Col>
              </Row>
            </Container>
          </Fragment>
        );
    }
}

export default Launches
