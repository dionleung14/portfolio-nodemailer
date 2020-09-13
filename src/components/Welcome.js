import React from "react";
import photograph from "./photos/linkedin-Seattle.jpg";
import FirstHeader from "./FirstHeader";
import github from "./photos/github-icon.png";
import linkedin from "./photos/linkedin-icon.png";

export default function Welcome() {
  return (
    <div
      className="lg:w-8/12 w-full lg:mx-auto border border-black border-2 lg:px-4 bg-dclpal1-400"
      id="top"
    >
      <FirstHeader text="Dion Leung, E.I.T, Fullstack Web Developer" />
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
        >
          <img src={github} alt="github" className="w-16 rounded" />
          <small className="text-center">Github</small>
        </a>

        <a
          href="https://www.linkedin.com/in/leungdion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" className="w-16 rounded" />
          <small className="align-center">LinkedIn</small>
        </a>
      </div>
    </div>
  );
}
