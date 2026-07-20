import React from "react";
import ComponentContainer from "../../../components/ComponentContainer.js";
import Header from "../../../components/Header";
import headshot from "../../../components/photos//headshot1.jpg";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

const skills = [
  "Full-Stack Software Engineer",
  "React.js",
  "Express.js",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Java",
  "Spring Boot",
  "AutoCAD",
  "Mount Rainier High School Football Coach - Special Teams",
  "B.S. Civil & Environmental Engineering, University of Washington",
  "Civil & Environmental Engineer-In-Training (EIT)",
  "Seattle native",
];

export default function About(props) {
  const revealRef = useRevealOnScroll();
  const dark = props.darkModeApp.darkMode;

  return (
    <ComponentContainer id="about-me" color="0" darkModeCont={dark}>
      <Header text="About Me" color={0} darkModeHeader={dark} />
      <div
        ref={revealRef}
        className="flex md:flex-row flex-col items-center justify-around px-6 pt-4">
        <div className="reveal reveal-delay-1 lg:w-1/2 w-full lg:mx-4 my-2 lg:my-6">
          <div className="media-frame">
            <img
              className="md:w-auto md:h-auto w-3/4 mx-auto"
              src={headshot}
              alt="headshot"
            />
          </div>
          <p className="text-xs text-center italic mt-2 opacity-80">
            Photo taken by{" "}
            <a
              href="https://www.dalenanguyen.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-dclpal1-300">
              Dalena Nguyen
            </a>
          </p>
        </div>
        <div className="reveal reveal-delay-2 md:w-1/2 w-full py-4">
          <ul className={`skill-rail ${dark ? "" : "skill-rail--light"}`}>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </ComponentContainer>
  );
}
