import React from 'react';
import GradientSignUp from '../components/gradientSignUp';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import PrimaryButton from '../components/primaryButton';


const SignUp = () => {
    return (<React.StrictMode>
        <GradientSignUp/>
        <div className="form-container">
        <Form className="signup-form">
            <Form.Group>
                <Form.Control className="name-input" type="text" placeholder="name" name="name"></Form.Control>
                <Form.Control className="email-input" type="text" placeholder="email" name="email" ></Form.Control>
                <Link to='/SignUp'><PrimaryButton className="submit-button" value="submit" type="submit" text='Sign Up'/></Link>
            </Form.Group>
        </Form>
    </div> 
        </React.StrictMode>
     
    )
}

export default SignUp