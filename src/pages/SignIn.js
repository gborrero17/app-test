import React from "react";
import GradientSignUp from "../components/gradientSignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/primaryButton";
import SecondaryOutlineButtonIcon from "../components/secondaryOutlineButtonIcon";

const SignIn = () => {
  return (
    <React.StrictMode>
      <GradientSignUp />
      <div className="form-container">
        <Form className="signup-form">
          <Form.Group>
            <div className="row mx-4 justify-content-center">
              <div className="welcome">Welcome!</div>
              <div className="signcontinue">Sign in to continue</div>
              <div className=" row col-12 thinborder">
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

              <div className=" row col-12 thinborder">
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
            </div>
            <Link to="/SignUp">
              <PrimaryButton
                className="submit-button"
                value="submit"
                type="submit"
                text="Sign Up"
              />
            </Link>
          </Form.Group>
        </Form>
        <div className="text-center p-3 underbutton">OR LOGIN WITH</div>
        <SecondaryOutlineButtonIcon
          text="Sign up with Facebook"
          icon="facebookpng"
        />
        <div className="mt-3">
          <SecondaryOutlineButtonIcon
            text="Sign up with Twitter"
            icon="twitterpng"
          />
        </div>
        <div className="text-center p-3 alreadytext">
          Don't Have an Account? <Link to="/SignUp">Get Started</Link>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default SignIn;
