import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss';
import eye from '../../assets/eye.svg'

const RegistrationForm = () => {
  return <Form className="registration-form">

    <span>Hello, Again!</span>
    <p className="p-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <input class="form-control form-control-lg" type="text" placeholder="Customer ID"></input>
    <input class="form-control form-control-lg mt-4" type="text" placeholder="Andrews12@gmail.com"></input>
    <div className="psw-wraper">
      <input class="form-control form-control-lg " type="text" placeholder="Password"></input>
      <img className="eye-icon" src={eye} alt="" />
    </div>

    <div className="forget-password">
      <p>Forgot Password?</p>
    </div>
    <Button className="sign-in">Sign in</Button>
    <p className="register">Don’t have an account?  Register</p>
  </Form>;

};

export default RegistrationForm;


