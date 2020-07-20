import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavLink, Nav, Form, FormControl, Button, Image, Card} from 'react-bootstrap';
import {Input} from 'reactstrap'


class Profile_Card extends Component {
    render(){
        return(
            <header>
            <Container>
                <Row>
                <Col md={{ span: 4, offset: 1 }}>
                <Card style={{ width: '15rem' }} className="text-center p-3">
                    <Card.Img variant="top" src="Ellipse.png" />
                    <Card.Body>
                        <Card.Title style = {{fontSize : 25}}>User Name</Card.Title>
                        <Card.Text style={{color : "gray", fontSize : 10}}>
                        user@gmail.com
                        </Card.Text>
                        <Button variant="light">Edit Profile</Button>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </Container>
            </header>
        );
    }
}

export default Profile_Card
