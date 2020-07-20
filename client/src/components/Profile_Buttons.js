import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavLink, Nav, Form, FormControl, Button, Image, Card} from 'react-bootstrap';
import {Input} from 'reactstrap'


class Profile_Buttons extends Component {
    render(){
        return(
            <header>
            <Container>
                <Row>
                <Col md={{ span: 4, offset: 1 }}>
                <Card style={{ width: '15rem' }}>
                    <Card.Body>
                        <Card.Title style = {{fontSize : 15}}>
                            <Row inline>
                                <Col md = {6}>MY TITLES</Col>
                                <Col md = {{span : 6, offset:7}}><Button variant = "light" style = {{fontSize : 8}}>See more ></Button></Col>
                            </Row>
                        </Card.Title>
                        <Button variant="light" style = {{fontSize : 10}}>Film Lover</Button>
                        <br/>
                        <Button variant="light" style = {{fontSize : 10}}>Creative</Button>
                        <br/>
                        <Button variant="light" style = {{fontSize : 10}}>Pro Dj</Button>
                        <br/>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </Container>
            </header>
        );
    }
}

export default Profile_Buttons
