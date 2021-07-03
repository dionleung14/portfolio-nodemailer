import React from "react";
import ComponentContainer from "../../../components/ComponentContainer";
// import linkedInSeattle from "./photos/linkedin-Seattle.jpg";
// import seattleDay from "./photos/seattle-day-hi-res.jpg";
import FirstHeader from "../../../components/FirstHeader";
// import github from "./photos/github-icon.png";
// import linkedin from "./photos/linkedin-icon.png";
// import emailIcon from "./photos/email-icon.png";
// import twitter from "./photos/twitter-icon.png";
// import portfolioArr from "../portfolio-items/portfolio-data";
import { Link } from "react-router-dom";

export default function PortfolioWelcome(props) {
  return (
    <ComponentContainer
      id="top"
      darkModeCont={props.darkModeApp.darkMode}
      color="1">
      <FirstHeader
        text="Project Collection"
        subtext="Welcome to my expanded portfolio!"
        darkModeHeader={props.darkModeApp.darkMode}
        color="1"
      />
      <h1>
        Currently a work in progress, but feel free to poke around! Here you can
        find a more in-depth collection of my best works. Depending on what I'm
        seeking at the moment, they'll be arranged in a certain manner. If
        you're really interested in my journey, you can find my archive{" "}
        <Link to="/archive">
          <span className="hover:underline text-dclpal1-300">here</span>
        </Link>{" "}
        (or above in the navbar) and really track the evolution of my work.
      </h1>
    </ComponentContainer>
  );
}
