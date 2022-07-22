import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class IconSecondaryOutlineButton extends Component {
  state = {};
  render() {
    return (
      <>
        <Row className="mx-4 d-flex justify-content-center">
          <Button as={Col} className="btn-outline-secondary">
            <img
              className="float-icon-left"
              src={require(`../img/${this.props.icon}.png`)}
              alt="Icon"
            ></img>
            {this.props.text}
          </Button>
        </Row>
      </>
    );
  }
}

export default IconSecondaryOutlineButton;
