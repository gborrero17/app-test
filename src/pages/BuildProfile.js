import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/primaryButton";

const BuildProfile = () => {
  return (
    <React.StrictMode>
      <div className="form-container-nograd">
        <Form className="signin-form">
          <Form.Group>
            <div className="row mx-4 justify-content-center">
              <div className=" row col-12 thinborder mb-3">
                <div className="col-1"></div>
                <div className="col-11">
                  <Form.Control
                    className="fullname-input"
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                  ></Form.Control>
                </div>
              </div>

              <div className=" row col-12 thinborder mb-3">
                <div className="col-1"></div>
                <div className="col-11">
                  <Form.Select
                    aria-label="Default select example"
                    className="fullname-input"
                  >
                    <option>Preferred Pronouns</option>
                    <option value="sheher">She/Her</option>
                    <option value="hehim">He/Him</option>
                    <option value="theythem">They/Them</option>
                    <option value="theythem">She/Them</option>
                    <option value="theythem">He/Them</option>
                  </Form.Select>
                </div>
              </div>

              <div className=" row col-12 thinborder mb-3">
                <div className="col-1"></div>
                <div className="col-11">
                  <Form.Control
                    className="fullname-input"
                    type="text"
                    placeholder="Preferred user tag"
                    name="fullname"
                  ></Form.Control>
                </div>
              </div>
              <div className=" row col-12 thinborder mb-3">
                <div className="col-1"></div>
                <div className="col-11">
                  <InputGroup className="fullname-input">
                    <Form.Control
                      placeholder="Profile Picture"
                      aria-label="Profile Picture"
                      aria-describedby="basic-addon2"
                    />
                    <Button className="button-gray">Browse</Button>
                  </InputGroup>
                </div>
              </div>

              <div className=" row col-12 thinborder mb-3">
                <div className="col-1"></div>
                <div className="col-11">
                  <Form.Control
                    className="fullname-input"
                    type="text"
                    placeholder="Cover Photo"
                    name="fullname"
                  ></Form.Control>
                </div>
              </div>

              <div className=" row col-12 thinborder mb-3">
                <div className="col-1"></div>
                <div className="col-11">
                  <Form.Control
                    className="fullname-input"
                    type="text"
                    placeholder="Issues you support (up to 4)"
                    name="fullname"
                  ></Form.Control>
                </div>
              </div>
            </div>
            <div className="bottomit">
              <Link to="/SignUp">
                <PrimaryButton
                  className="submit-button bottomit"
                  value="submit"
                  type="submit"
                  text="SAVE"
                />
              </Link>
            </div>
          </Form.Group>
        </Form>
      </div>
    </React.StrictMode>
  );
};

export default BuildProfile;
