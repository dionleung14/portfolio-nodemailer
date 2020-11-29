import React from "react";
import ComponentContainer from "./ComponentContainer";
import linkedInSeattle from "./photos/linkedin-Seattle.jpg";
import seattleDay from "./photos/seattle-day-hi-res.jpg";
import FirstHeader from "./FirstHeader";
import github from "./photos/github-icon.png";
import linkedin from "./photos/linkedin-icon.png";
import emailIcon from "./photos/email-icon.png";
import twitter from "./photos/twitter-icon.png";
import portfolioArr from "../portfolio-items/portfolio-data";

export default function PortfolioWelcome(props) {
  return (
    // <div id="top">
    <ComponentContainer id="top" darkModeCont={props.darkModeApp.darkMode}>
      <FirstHeader
        text="Project Collection"
        subtext="Welcome to my expanded portfolio!"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <h1>Here you can find a more in-depth collection of my best works.</h1>
      name: {portfolioArr[0].headline}
      {/* </ComponentContainer> */}
      {/* </div> */}
    </ComponentContainer>
  );
}
