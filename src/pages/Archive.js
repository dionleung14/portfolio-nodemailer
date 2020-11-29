import React from "react";
import FirstHeader from "../components/FirstHeader";
import ContactForm from "../components/ContactForm";

export default function Archive(props) {
  return (
    <div>
      <FirstHeader
        text="Dion Leung, E.I.T"
        darkModeHeader={props.darkModeApp.darkMode}
        subtext="Fullstack Web Developer"
        // darkModeHeader={props.darkModeApp.darkMode}
      />
      I'm the archive
      <ContactForm darkModeApp={props.darkModeApp} />
    </div>
  );
}
