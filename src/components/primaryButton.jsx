import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class PrimaryButton extends Component {
  state = {};
  render() {
    return (
      <>
        <Row className="pt-4 mb-0 d-flex justify-content-center">
          <Button as={Col} className="btn-primary">
            {this.props.text}
          </Button>
        </Row>
      </>
    );
  }
}

export default PrimaryButton;
