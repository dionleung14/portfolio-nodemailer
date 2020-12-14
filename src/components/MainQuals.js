import React from "react";
import Header from "./Header.js";
import alaskaSurvey from "./photos/alaskaSurvey.JPG";
import ComponentContainer from "./ComponentContainer.js";

export default function Quals(props) {
  return (
    <ComponentContainer
      id="qualifications"
      color="3"
      darkModeCont={props.darkModeApp.darkMode}
    >
      <Header
        text="Qualifications"
        color="3"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <div className="flex lg:flex-row flex-col-reverse items-center justify-around lg:py-6 p-2">
        <div className="flex flex-col lg:w-1/2 w-full my-2 lg:pl-6">
          <img
            className=""
            src={alaskaSurvey}
            alt="OP calibrating surveying equipment"
          />
          <small className="text-center italic">
            Calibrating a three-wire level in remote Alaska, waiting for fog to
            dissipate before helicopters could transport us! Unfortunately I
            don't have many photos of me coding, so please enjoy photos of me in
            my civil/environmental engineering roles.
          </small>
        </div>
        <div className="lg:w-1/2 w-full lg:ml-4 lg:pr-4">
          <p className="text-left">
            My unique skillset combines a civil and environmental engineering
            training with a passion for coding, bringing an innovative and
            analytic approach to the table. Dipping my feet into coding inspired
            me to pursue it further, and I enrolled in and completed a{" "}
            <a
              className="hover:underline text-dclpal1-300"
              href="https://bootcamp.uw.edu/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Web Development/Coding Bootcamp
            </a>{" "}
            through the University of Washington.
            {/* I had begun to
            explore automation and coding through teaching myself LISP (AutoLISP
            via AutoCAD), trying to circumvent lengthy and repetitive actions
            when designing structures. Unfortunately, I was unable to make
            significant progress before tumultuously finding myself looking for
            another job. */}
            <br />
            <br />
            Problem solving was a skill taught through my formal education -
            applying it to developing apps and feature-rich websites has been
            rather simple.
            <br />
            {/* with a
            focus on mobile-first design and development  With my engineering background, I can break down
            large problems into manageable tasks, which has been invaluable in
            the world of software development. I look forward to building a more
            intuitive user experience on the web, much like how I sought to
            build a more intuitive drafting process using AutoCAD.*/}
            <br />
            My strengths include meeting deadlines, effective communication, and
            teamwork. I also manage my time well, can work under pressure, and
            have extensive experience with data analysis (typically for surface
            water systems, but Microsoft Excel is versatile).
            {/* I am seen as a
            creative leader, able to learn quickly, capable of independent work,
            with high attention to detail and being able to adapt to adverse
            circumstances. */}
          </p>
        </div>
      </div>
    </ComponentContainer>
  );
}
