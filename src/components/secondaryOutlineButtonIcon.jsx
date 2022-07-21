import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SecondaryOutlineButtonIcon extends Component {
  state = {};
  render() {
    return (
      <>
        <Row className="mx-5 d-flex justify-content-center">
          <Button as={Col} className="btn-outline-secondary">
            {this.props.text}

            <img
              src={require(`../img/${this.props.icon}.png`)}
              alt="Icon"
            ></img>
          </Button>
        </Row>
      </>
    );
  }
}

export default SecondaryOutlineButtonIcon;
