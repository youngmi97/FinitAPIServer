import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavLink, Nav, Form, FormControl, Button, Image, Card, Tabs, Tab} from 'react-bootstrap';


class Card_Tab extends Component {
    render(){
        return(
            <header>
            <br/>
            <Tabs defaultActiveKey="Subscriptions" id="uncontrolled-tab-example" style = {{fontSize : 10, fontColor:'purple'}}>
                <Tab eventKey="Subscriptions" title="Subscriptions" >
                    Content
                </Tab>
                <Tab eventKey="Groups" title="Groups">
                Content
                </Tab>
                <Tab eventKey="Events" title="Events">
                Content
                </Tab>
                <Tab eventKey="Insight" title="Insight">
                Content
                </Tab>
            </Tabs>
            </header>
        );
    }
}

export default Card_Tab
