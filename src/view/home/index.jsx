import React from "react";
import RegistrationForm from "../../shared/registration-form";
import Testimonials from "../carousel/testimonials-carousel";
import './style.scss';


const HomeComponent = () => {
  return (
    <div className="container-fluid home">
      <div className=" Testimonials " >
        <Testimonials />
      </div>
      <div className="">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default HomeComponent;
