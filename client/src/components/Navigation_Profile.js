import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavLink, Nav, Form, FormControl, Button, Image} from 'react-bootstrap';
import {Input} from 'reactstrap'


class Navigation_Profile extends Component {
    render(){
        return(
            <header>
              <Navbar bg = "white" variant = "light">
                <Container style = {{alignItems :'flex-end'}}>
                  <Nav>
                    <NavLink href = "alarm" style = {{fontSize :10, justifyContent : "center"}}><button><Image src = "alarm.png"></Image></button></NavLink>
                    <NavLink href = "event" style = {{fontSize :10, justifyContent : "center"}}><button><Image src = "event.png"></Image></button></NavLink>
                    <NavLink href = "message" style = {{fontSize :10, justifyContent : "center"}}><button><Image src = "message.png"></Image></button></NavLink>
                    <NavLink href = "profile" style = {{fontSize :10, justifyContent : "center"}}><button><Image src = "Ellipse 2.png"></Image></button></NavLink>
                  </Nav>
                </Container>
              </Navbar>
              
            </header>
        );
    }
}

export default Navigation_Profile
