import React from "react";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import PortfolioNavBar from "../Portfolio/components/PortfolioNavBar";
import MetaPortfolioWelcome from "./components/MetaPortfolioWelcome";

export default function MetaPortfolio(props) {
  const dark = props.darkModeApp.darkMode;
  return (
    <div className={`site-shell ${dark ? "site-shell--dark" : "site-shell--light"}`}>
      <PortfolioNavBar darkModeApp={props.darkModeApp} toggle={props.toggle} />
      <MetaPortfolioWelcome darkModeApp={props.darkModeApp} />
      <ContactForm darkModeApp={props.darkModeApp} />
      <Footer darkModeApp={props.darkModeApp} />
    </div>
  );
}
