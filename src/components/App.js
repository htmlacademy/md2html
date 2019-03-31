import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Конвертер из MD в HTML</h1>
          </Col>
        </Row>
        <Row>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default App;
