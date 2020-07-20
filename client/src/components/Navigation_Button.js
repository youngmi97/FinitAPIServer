import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavLink, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Navigation_Button extends Component {
    render(){
        return(
            <header>
              <Navbar bg = "white" variant = "light" sticky = "top">
                <NavbarBrand href = "#home" style = {{color:"purple"}}>
                  surPlus
                </NavbarBrand>
                <Nav classname = "mr-auto">
                  <NavLink href = "Discover" style = {{fontSize :10, justifyContent : "middle"}}>Discover</NavLink>
                  <NavLink href = "For You" style = {{fontSize :10, justifyContent : "middle"}}>For you</NavLink>
                  <NavLink href = "My page" style = {{fontSize :10, justifyContent : "middle"}}>My page</NavLink>
                </Nav>
              </Navbar>
              
            </header>
        );
    }
}

export default Navigation_Button
