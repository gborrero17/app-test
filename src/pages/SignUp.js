import React from "react";
import GradientSignUp from "../components/gradientSignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/primaryButton";
import IconSecondaryOutlineButton from "../components/iconsecondaryOutlineButton";

const SignUp = () => {
  return (
    <React.StrictMode>
      <GradientSignUp />
      <div className="form-container ">
        <Form className="signin-form">
          <Form.Group>
            <div className="row mx-4 justify-content-center">
              <div className=" row col-12 thinborderbottom">
                <div className="col-1">
                  <img
                    src={require("../img/fullnamepng.png")}
                    alt="Full Name"
                  ></img>
                </div>
                <div className="col-11 ">
                  <Form.Control
                    className="fullname-input"
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                  ></Form.Control>
                </div>
              </div>

              <div className=" row col-12 thinborderbottom">
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

              <div className=" row col-12 thinborderbottom">
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

              <div className=" row col-12 thinborderbottom">
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

              <div className=" row col-12 thinborderbottom">
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
                    placeholder="Post Code"
                    name="zipcode"
                  ></Form.Control>
                </div>
              </div>
            </div>
            <Link to="/BuildProfile">
              <PrimaryButton
                className="submit-button"
                value="submit"
                type="submit"
                text="Sign Up"
              />
            </Link>
          </Form.Group>
        </Form>
        <div className="text-center p-3 underbutton">OR SIGN UP WITH</div>
        <IconSecondaryOutlineButton text="Facebook" icon="facebookpng" />
        <div className="mt-3">
          <IconSecondaryOutlineButton text="Twitter" icon="twitterpng" />
        </div>
        <div className="text-center p-3 alreadytext">
          Already have an account? <Link to="/SignIn">SignIn</Link>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default SignUp;
