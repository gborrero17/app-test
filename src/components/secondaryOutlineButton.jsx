import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SecondaryOutlineButton extends Component {
  state = {};
  render() {
    return (
      <>
        <Row className="m-5 mt-3 d-flex justify-content-center">
          <Button as={Col} className="btn-outline-secondary">
            Sign In
          </Button>
        </Row>
      </>
    );
  }
}

export default SecondaryOutlineButton;
