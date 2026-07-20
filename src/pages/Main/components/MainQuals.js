import React from "react";
import Header from "../../../components/Header.js";
import alaskaSurvey from "../../../components/photos/alaskaSurvey.JPG";
import ComponentContainer from "../../../components/ComponentContainer.js";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

export default function Quals(props) {
  const revealRef = useRevealOnScroll();
  const dark = props.darkModeApp.darkMode;

  return (
    <ComponentContainer
      id="qualifications"
      color="3"
      darkModeCont={dark}>
      <Header text="Qualifications" color="3" darkModeHeader={dark} />
      <div
        ref={revealRef}
        className="flex lg:flex-row flex-col-reverse items-center justify-around lg:py-6 p-2">
        <div className="reveal reveal-delay-1 flex flex-col lg:w-1/2 w-full my-2 lg:pl-6">
          <div className="media-frame">
            <img
              src={alaskaSurvey}
              alt="OP calibrating surveying equipment"
            />
          </div>
          <small className="text-center italic mt-2 opacity-80">
            Calibrating a three-wire level in remote Alaska, waiting for fog to
            dissipate before helicopters could transport us! Unfortunately I
            don't have many photos of me coding, so please enjoy photos of me in
            my civil/environmental engineering roles.
          </small>
        </div>
        <div className="reveal reveal-delay-2 lg:w-1/2 w-full lg:ml-4 lg:pr-4 section-copy">
          <p className="text-left">
            My unique skillset combines a civil and environmental engineering
            training with a passion for coding, bringing an innovative and
            analytic approach to the table. Dipping my feet into coding inspired
            me to pursue it further, and I enrolled in and completed a{" "}
            <a
              className="hover:underline text-dclpal1-300"
              href="https://bootcamp.uw.edu/"
              target="_blank"
              rel="noreferrer noopener">
              Web Development/Coding Bootcamp
            </a>{" "}
            through the University of Washington.
            <br />
            <br />
            Problem solving was a skill taught through my formal education -
            applying it to developing apps and feature-rich websites has been
            rather simple.
            <br />
            <br />
            My strengths include meeting deadlines, effective communication, and
            teamwork. I also manage my time well, can work under pressure, and
            have extensive experience with data analysis (typically for surface
            water systems, but Microsoft Excel is versatile).
          </p>
        </div>
      </div>
    </ComponentContainer>
  );
}
