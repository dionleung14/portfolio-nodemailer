import React from "react";
import Footer from "../components/Footer";
import PortfolioNavBar from "../components/PortfolioNavBar";
import ContactForm from "../components/ContactForm";
import MetaPortfolioWelcome from "../components/MetaPortfolioWelcome";

export default function MetaPortfolio(props) {
  return (
    <div>
      <PortfolioNavBar darkModeApp={props.darkModeApp} toggle={props.toggle} />
      <MetaPortfolioWelcome darkModeApp={props.darkModeApp} />
      <ContactForm darkModeApp={props.darkModeApp} />
      <Footer darkModeApp={props.darkModeApp} />
    </div>
  );
}
