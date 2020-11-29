import React, { useState } from "react";
// import logo from "./logo.svg";
import MainNavBar from "../components/MainNavBar";
import MainWelcome from "../components/MainWelcome";
import MainAbout from "../components/MainAbout";
import MainMeet from "../components/MainMeet";
import MainQuals from "../components/MainQuals";
import MainPortfolio from "../components/MainPortfolio";
import MainTestimonials from "../components/MainTestimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

// console.log(process.env.REACT_APP_POKEMON);
// console.log(process.env.POKEMON);

function Main(props) {
  return (
    <div>
      <MainNavBar darkModeApp={props.darkModeApp} toggle={props.toggle} />
      {/* <Switch> */}
      {/* <Route exact path="/about-me"> */}
      <MainWelcome darkModeApp={props.darkModeApp} />
      <MainAbout darkModeApp={props.darkModeApp} />
      {/* </Route> */}
      {/* <About /> */}
      <MainMeet darkModeApp={props.darkModeApp} />
      <MainQuals darkModeApp={props.darkModeApp} />
      <MainPortfolio darkModeApp={props.darkModeApp} />
      <MainTestimonials darkModeApp={props.darkModeApp} />
      <ContactForm darkModeApp={props.darkModeApp} />
      <Footer darkModeApp={props.darkModeApp} />
      {/* </Switch> */}
    </div>
  );
}

export default Main;
