import React, { Component, Fragment } from "react";
import {
  Col, Container,
  Row
} from "react-bootstrap";
import Navigation_Button from "./Navigation_Button";

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
