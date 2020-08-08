import React, { Component, Fragment } from "react";
import Navigation_Button from "./Navigation_Button";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavLink,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <Navigation_Button />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Launches;
