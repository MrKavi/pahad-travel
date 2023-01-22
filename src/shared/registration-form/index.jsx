import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss';
import eye from '../../assets/eye.svg'
import greeting from '../../assets/greeting.webp'


const RegistrationForm = () => {
  return <Form className="registration-form">
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "10px", height: "100px", borderRadius: "50px", objectFit: "cover" }}>
      <img style={{ width: "100px" }} src={greeting} />

    </div>
    <span> Hello, Welcome!</span>


    <input class="form-control form-control-lg" type="text" placeholder="your name"></input>
    <input class="form-control form-control-lg mt-4" type="text" placeholder="Mr/Mrs_abc@gmail.com"></input>
    <div className="psw-wraper">
      <input class="form-control form-control-lg " type="password" placeholder="Password"></input>
      <img className="eye-icon" src={eye} alt="" />
    </div>

    <div className="forget-password">
      <p>Forgot Password?</p>
    </div>
    <Button className="sign-in">Sign in</Button>
    <p className="register">Don’t have an account?     <p className="register-p"> Register</p> </p>

  </Form>;

};

export default RegistrationForm;


