import React from "react";
import GradientSignUp from "../components/gradientSignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/primaryButton";

const SignUp = () => {
  return (
    <React.StrictMode>
      <GradientSignUp />
      <div className="form-container">
        <Form className="signup-form">
          <Form.Group>
            <div className="row mx-4">
              <div className=" row col-12">
                <div className="col-1">
                  <img
                    src={require("../img/fullnamepng.png")}
                    alt="Full Name"
                  ></img>
                </div>
                <div className="col-11">
                  <Form.Control
                    className="fullname-input"
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                  ></Form.Control>
                </div>
              </div>

              <div className=" row col-12">
                <div className="col-1">
                  <img
                    src={require("../img/emailpng.png")}
                    alt="Full Name"
                  ></img>
                </div>
                <div className="col-11">
                  <Form.Control
                    className="email-input"
                    type="text"
                    placeholder="E-Mail"
                    name="email"
                  ></Form.Control>
                </div>
              </div>

              <div className=" row col-12">
                <div className="col-1">
                  <img
                    src={require("../img/passwordpng.png")}
                    alt="Full Name"
                  ></img>
                </div>
                <div className="col-11">
                  <Form.Control
                    className="password-input"
                    type="text"
                    placeholder="Password"
                    name="password"
                  ></Form.Control>
                </div>
              </div>

              <div className=" row col-12">
                <div className="col-1">
                  <img
                    src={require("../img/datebirthpng.png")}
                    alt="Full Name"
                  ></img>
                </div>
                <div className="col-11">
                  <Form.Control
                    className="datebirth-input"
                    type="date"
                    placeholder="Date of Birth"
                    name="datebirth"
                  ></Form.Control>
                </div>
              </div>

              <div className=" row col-12">
                <div className="col-1">
                  <img
                    src={require("../img/zipcodepng.png")}
                    alt="Full Name"
                  ></img>
                </div>
                <div className="col-11">
                  <Form.Control
                    className="zipcode-input"
                    type="text"
                    placeholder="Zipcode"
                    name="zipcode"
                  ></Form.Control>
                </div>
              </div>

              <Link to="/SignUp">
                <PrimaryButton
                  className="submit-button"
                  value="submit"
                  type="submit"
                  text="Sign Up"
                />
              </Link>
            </div>
          </Form.Group>
        </Form>
      </div>
    </React.StrictMode>
  );
};

export default SignUp;
