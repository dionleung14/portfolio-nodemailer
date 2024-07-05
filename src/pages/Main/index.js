import React from "react";
import MainNavBar from "./components/MainNavBar";
import MainWelcome from "./components/MainWelcome";
import MainAbout from "./components/MainAbout";
import MainMeet from "./components/MainMeet";
import MainQuals from "./components/MainQuals";
import MainPortfolio from "./components/MainPortfolio";
import MainTestimonials from "./components/MainTestimonials";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

function Main(props) {
  return (
    <div>
      <MainNavBar darkModeApp={props.darkModeApp} toggle={props.toggle} />
      <MainWelcome darkModeApp={props.darkModeApp} />
      <MainAbout darkModeApp={props.darkModeApp} />
      <MainMeet darkModeApp={props.darkModeApp} />
      <MainQuals darkModeApp={props.darkModeApp} />
      <MainPortfolio darkModeApp={props.darkModeApp} />
      <MainTestimonials darkModeApp={props.darkModeApp} />
      <ContactForm darkModeApp={props.darkModeApp} />
      <Footer darkModeApp={props.darkModeApp} />
    </div>
  );
}

export default Main;
