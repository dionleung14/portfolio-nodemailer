import React from "react";
import ArchivePortfolio from "../components/ArchivePortfolio";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import PortfolioNavBar from "../components/PortfolioNavBar";
import PortfolioWelcome from "../components/PortfolioWelcome";

export default function Archive(props) {
  return (
    <div>
      <PortfolioNavBar darkModeApp={props.darkModeApp} toggle={props.toggle} />
      <PortfolioWelcome darkModeApp={props.darkModeApp} />
      <ArchivePortfolio darkModeApp={props.darkModeApp} />
      <ContactForm darkModeApp={props.darkModeApp} />
      <Footer darkModeApp={props.darkModeApp} />
    </div>
  );
}
