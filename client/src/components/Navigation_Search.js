import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavLink, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {Input} from 'reactstrap'


class Navigation_Search extends Component {
    render(){
        return(
            <header>
              <Navbar bg = "white" variant = "light">
                
                <Form.Group>
                    <Form inline>
                    <Form.Control type="text" size = 'sm' placeholder="New subscriptions" htmlSize = "20" />  
                    <Button size = 'sm' variant ="outline-info">Search</Button>
                    </Form>
                </Form.Group>
              </Navbar>
              
            </header>
        );
    }
}

export default Navigation_Search
