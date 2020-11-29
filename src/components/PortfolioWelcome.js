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
import { Link } from "react-router-dom";

export default function PortfolioWelcome(props) {
  return (
    // <div id="top">
    <ComponentContainer id="top" darkModeCont={props.darkModeApp.darkMode}>
      <FirstHeader
        text="Project Collection"
        subtext="Welcome to my expanded portfolio!"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <h1>
        Here you can find a more in-depth collection of my best works. They are
        arranged in a general sense of the circumstances surrounding their
        creation. If you're really interested in my journey, you can find my
        archive{" "}
        <Link to="/archive">
          <span className="hover:underline text-dclpal1-300">here</span>
        </Link>
        , and really track the evolution of my work.
      </h1>
      <h1>headline: {portfolioArr[0].headline}</h1>
      <h1>repo: {portfolioArr[0].repo}</h1>
      <h1>deployed: {portfolioArr[0].deployed}</h1>
      {/* </ComponentContainer> */}
      {/* </div> */}
    </ComponentContainer>
  );
}
