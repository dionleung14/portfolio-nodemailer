import React from "react";
import ComponentContainer from "./ComponentContainer";
import linkedInSeattle from "./photos/linkedin-Seattle.jpg";
import seattleDay from "./photos/seattle-day-hi-res.jpg";
import FirstHeader from "./FirstHeader";
import github from "./photos/github-icon.png";
import linkedin from "./photos/linkedin-icon.png";
import emailIcon from "./photos/email-icon.png";
import twitter from "./photos/twitter-icon.png";

export default function ArchiveWelcome(props) {
  return (
    // <div id="top">
    <ComponentContainer id="top" darkModeCont={props.darkModeApp.darkMode}>
      <FirstHeader
        text="Project Archive"
        subtext="Welcome to my project archive! Here you can find some of my older projects, or projects that I don't believe are relevant to my desired career trajectory right now."
        darkModeHeader={props.darkModeApp.darkMode}
      />
      {/* </ComponentContainer> */}
      {/* </div> */}
    </ComponentContainer>
  );
}
