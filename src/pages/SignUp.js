import React from 'react';
import GradientSignUp from '../components/gradientSignUp';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import PrimaryButton from '../components/primaryButton';


const SignUp = () => {
    return (<React.StrictMode>
        <GradientSignUp/>
        <div className="form-container">
        <Form className="signup-form">
            <Form.Group>
            <img src={require("../img/whitehorlogo.png")} alt="Full Name"></img>
                <Form.Control className="fullname-input" type="text" placeholder="Full Name" name="fullname"></Form.Control>
                <Form.Control className="email-input" type="text" placeholder="E-Mail" name="email" ></Form.Control>
                <Form.Control className="password-input" type="text" placeholder="Password" name="password"></Form.Control>
                <Form.Control className="datebirth-input" type="text" placeholder="Date of Birth" name="datebirth" ></Form.Control>
                <Form.Control className="zipcode-input" type="text" placeholder="Zipcode" name="zipcode"></Form.Control>
                <Link to='/SignUp'><PrimaryButton className="submit-button" value="submit" type="submit" text='Sign Up'/></Link>
            </Form.Group>
        </Form>
    </div> 
        </React.StrictMode>
     
    )
}

export default SignUp