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

export default function MetaPortfolioWelcome(props) {
  return (
    <ComponentContainer id="top" darkModeCont={props.darkModeApp.darkMode}>
      <FirstHeader
        text="Easter Egg Alert!"
        subtext="You found a hidden page!"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <h1>
        Congratulations! You managed to find this hidden page, either by
        clicking on the "deployed" link for my portfolio or typing the url
        directly in the url bar. Realistically, there isn't a need to click on
        the deployed link for the portfolio project, since that's where you
        already were, but I'm glad you're here regardless.{" "}
      </h1>
      <br />
      <br />
      <h1>
        I would love to hear from you with the contact form below. There's
        actually ANOTHER easter egg within the contact form if you feel up to
        the challenge (or maybe you've already found that one too)! archive{" "}
        <Link to="/archive">
          <span className="hover:underline text-dclpal1-300">here</span>
        </Link>
        , and really track the evolution of my work.
      </h1>
    </ComponentContainer>
  );
}
