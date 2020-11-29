import React from "react";
import PortfolioFreelance from "../components/PortfolioFreelance";
import PortfolioPersonal from "../components/PortfolioPersonal";
import PortfolioBootcamp from "../components/PortfolioBootcamp";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import PortfolioNavBar from "../components/PortfolioNavBar";
import PortfolioWelcome from "../components/PortfolioWelcome";

export default function Archive(props) {
  return (
    <div>
      <PortfolioNavBar darkModeApp={props.darkModeApp} toggle={props.toggle} />
      <PortfolioWelcome darkModeApp={props.darkModeApp} />
      <PortfolioFreelance darkModeApp={props.darkModeApp} />
      <PortfolioPersonal darkModeApp={props.darkModeApp} />
      <PortfolioBootcamp darkModeApp={props.darkModeApp} />
      <ContactForm darkModeApp={props.darkModeApp} />
      <Footer darkModeApp={props.darkModeApp} />
    </div>
  );
}
