import React from "react";
import ComponentContainer from "../../../components/ComponentContainer";
// import linkedInSeattle from "./photos/linkedin-Seattle.jpg";
// import seattleDay from "./photos/seattle-day-hi-res.jpg";
import FirstHeader from "../../../components/FirstHeader";
// import github from "./photos/github-icon.png";
// import linkedin from "./photos/linkedin-icon.png";
// import emailIcon from "./photos/email-icon.png";
// import twitter from "./photos/twitter-icon.png";

export default function ArchiveWelcome(props) {
  return (
    // <div id="top">
    <ComponentContainer
      id="top"
      darkModeCont={props.darkModeApp.darkMode}
      color="1">
      <FirstHeader
        text="Project Archive"
        subtext="Welcome to my project archive! Here you can find some of my older projects, or projects that I don't believe are relevant to my desired career trajectory right now."
        darkModeHeader={props.darkModeApp.darkMode}
        color="1"
      />
      <h1 className="text-left top-0 lg:my-6 lg:w-3/4 w-full p-2 lg:mx-auto">
        This is also a work in progress, please ignore the dust from my
        construction and remodeling!
      </h1>
      {/* </ComponentContainer> */}
      {/* </div> */}
    </ComponentContainer>
  );
}
