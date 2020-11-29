import React from "react";
import ArchivePortfolio from "../components/ArchivePortfolio";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ArchiveNavBar from "../components/ArchiveNavBar";
import ArchiveWelcome from "../components/ArchiveWelcome";

export default function Archive(props) {
  return (
    <div>
      <ArchiveNavBar darkModeApp={props.darkModeApp} toggle={props.toggle} />
      <ArchiveWelcome darkModeApp={props.darkModeApp} />
      <ArchivePortfolio darkModeApp={props.darkModeApp} />
      <ContactForm darkModeApp={props.darkModeApp} />
      <Footer darkModeApp={props.darkModeApp} />
    </div>
  );
}
