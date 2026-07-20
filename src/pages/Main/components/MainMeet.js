import React from "react";
import Header from "../../../components/Header.js";
import flowtest from "../../../components/photos/flowtest.JPG";
import ComponentContainer from "../../../components/ComponentContainer.js";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

export default function Meet(props) {
  const revealRef = useRevealOnScroll();
  const dark = props.darkModeApp.darkMode;

  return (
    <ComponentContainer
      id="meet-me"
      color="2"
      darkModeCont={dark}>
      <Header text="Meet me" color="2" darkModeHeader={dark} />
      <div
        ref={revealRef}
        className="flex flex-col lg:flex-row items-center mt-4">
        <div className="reveal reveal-delay-1 text-left lg:py-8 lg:pl-6 lg:pr-4 lg:w-1/2 p-2 section-copy">
          <p>
            Hi! My name is Dion Leung, and I've been a Seattle area native my
            whole life. I grew up and lived in Kent for the first 18 years of my
            life, then moved to Seattle where I attended the University of
            Washington, earning a degree in Civil and Environmental Engineering.
          </p>
          <br />
          <p>
            I was drawn to programming when I was assigned to work on
            overhauling and automating AutoCAD procedures using AutoLISP. I
            quickly found out how fun coding was, and was excited with the
            possibilities. One thing led to another and before I knew it I found
            myself switching things up completely to pursue a career in
            web-development and here I am!
          </p>
          <br />
          <p>
            In my spare time I enjoy spending time outdoors (only if I take my
            allergy medicine!), playing sports like basketball, soccer,
            volleyball, and baseball, and making progress on my seemingly
            neverending list of shows to watch.
          </p>
        </div>
        <div className="reveal reveal-delay-2 flex flex-col lg:w-1/2 lg:pr-4 w-full p-2">
          <div className="media-frame">
            <img
              src={flowtest}
              alt="OP performing civil engineering tests"
            />
          </div>
          <small className="text-center italic mt-2 opacity-80">
            Performing high pressure flowtests on fire hydrants... on Halloween
          </small>
        </div>
      </div>
      <br />
    </ComponentContainer>
  );
}
