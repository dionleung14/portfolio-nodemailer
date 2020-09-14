import React from "react";
import ComponentContainer from "./ComponentContainer";
import photograph from "./photos/linkedin-Seattle.jpg";
import FirstHeader from "./FirstHeader";
import github from "./photos/github-icon.png";
import linkedin from "./photos/linkedin-icon.png";

export default function Welcome(props) {
  return (
    <ComponentContainer id="top" darkModeCont={props.darkModeApp.darkMode}>
      <FirstHeader
        text="Dion Leung, E.I.T, Fullstack Web Developer"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <div>
        {/* <h1 className="text-center text-4xl top-0 pt-10">Text with photo</h1> */}
        <img
          src={photograph}
          className="top-0 pt-4 mb-6 z-10"
          alt="Seattle-skyline"
        />
      </div>
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
            className="w-16 rounded border border-white"
          />
          <small className="italic">Github</small>
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
            className="w-16 rounded border border-white"
          />
          <small className="italic">LinkedIn</small>
        </a>
      </div>
    </ComponentContainer>
  );
}
