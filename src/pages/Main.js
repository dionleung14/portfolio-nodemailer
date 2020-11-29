import React, { useState } from "react";
// import logo from "./logo.svg";
import NavBar from "../components/NavBar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Meet from "../components/Meet";
import Quals from "../components/Quals";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

// console.log(process.env.REACT_APP_POKEMON);
// console.log(process.env.POKEMON);

function Main(props) {
  return (
    <div>
      <NavBar darkModeApp={props.darkModeApp} toggle={props.toggle} />
      {/* <Switch> */}
      {/* <Route exact path="/about-me"> */}
      <Welcome darkModeApp={props.darkModeApp} />
      <About darkModeApp={props.darkModeApp} />
      {/* </Route> */}
      {/* <About /> */}
      <Meet darkModeApp={props.darkModeApp} />
      <Quals darkModeApp={props.darkModeApp} />
      <Portfolio darkModeApp={props.darkModeApp} />
      <Testimonials darkModeApp={props.darkModeApp} />
      <ContactForm darkModeApp={props.darkModeApp} />
      <Footer darkModeApp={props.darkModeApp} />
      {/* </Switch> */}
    </div>
  );
}

export default Main;
