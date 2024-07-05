import React from "react";
import ComponentContainer from "../../../components/ComponentContainer";
// import linkedInSeattle from "./photos/linkedin-Seattle.jpg";
// import seattleDay from "./photos/seattle-day-hi-res.jpg";
import FirstHeader from "../../../components/FirstHeader";
// import github from "./photos/github-icon.png";
// import linkedin from "./photos/linkedin-icon.png";
// import emailIcon from "./photos/email-icon.png";
// import twitter from "./photos/twitter-icon.png";
import Emoji from "../../../components/Emoji";
// import portfolioArr from "../portfolio-items/portfolio-data";
// import { Link } from "react-router-dom";

export default function NoMatchWelcome(props) {
  return (
    // <div id="top">
    <ComponentContainer id="top" darkModeCont={props.darkModeApp.darkMode}>
      <FirstHeader
        text="Uh oh"
        subtext="I couldn't find what you were looking for..."
        darkModeHeader={props.darkModeApp.darkMode}
      />

      <h1>
        You might be here because you clicked for more info on one of my
        projects that I haven't quite updated yet.
      </h1>
      <h1>
        If you came here expecting something different (like not a project),
        please send me a message below explaining what happened. Feel free to
        navigate back to the homepage with the button at the top left though.
      </h1>
      <h1>
        Sorry you had to see my website in this state, I'm still working out all
        the knots <Emoji emoji="😢" label="sad face" />
      </h1>
    </ComponentContainer>
  );
}
