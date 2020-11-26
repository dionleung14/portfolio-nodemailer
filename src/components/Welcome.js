import React from "react";
import ComponentContainer from "./ComponentContainer";
import linkedInSeattle from "./photos/linkedin-Seattle.jpg";
import seattleDay from "./photos/seattle-day-hi-res.jpg";
import FirstHeader from "./FirstHeader";
import github from "./photos/github-icon.png";
import linkedin from "./photos/linkedin-icon.png";
import emailIcon from "./photos/email-icon.png";
import twitter from "./photos/twitter-icon.png";

export default function Welcome(props) {
  return (
    // <div id="top">
    <ComponentContainer id="top" darkModeCont={props.darkModeApp.darkMode}>
      <FirstHeader
        text="Dion Leung, E.I.T"
        subtext="Fullstack Web Developer"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <div>
        {/* <h1 className="text-center text-4xl top-0 pt-10">Text with photo</h1> */}
        <img
          src={linkedInSeattle}
          className="top-0 pt-4 mb-6 z-10 w-full"
          alt="Seattle-skyline"
        />
      </div>
      {/* <ComponentContainer> */}
      <div className="flex flex-row justify-around pb-4">
        <a
          href="https://github.com/dionleung14"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={github}
            alt="github"
            className="lg:w-16 w-8 rounded border border-white"
          />
          <small className="italic text-dclpal1-300 hover:underline">
            Github
          </small>
        </a>

        <a
          href="https://www.linkedin.com/in/leungdion/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="lg:w-16 w-8 rounded border border-white"
          />
          <small className="italic text-dclpal1-300 hover:underline">
            LinkedIn
          </small>
        </a>
        <a
          href="mailto:dioncleung@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={emailIcon}
            alt="linkedin"
            className="lg:w-16 w-8 rounded border border-white"
          />
          <small className="italic text-dclpal1-300 hover:underline">
            Email
          </small>
        </a>
        <a
          href="https://www.twitter.com/DionTheDev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={twitter}
            alt="linkedin"
            className="lg:w-16 w-8 rounded border border-white"
          />
          <small className="italic text-dclpal1-300 hover:underline">
            Twitter
          </small>
        </a>
      </div>
      {/* </ComponentContainer> */}
      {/* </div> */}
    </ComponentContainer>
  );
}
