import React from "react";
import FirstHeader from "./FirstHeader.js";
import placeholder from "./photos/linkedin-Seattle.jpg";
import dubs from "./photos/dubs.JPG";
import flowtest from "./photos/flowtest.JPG";
import NiehausStatue from "./photos/NiehausStatue.JPG";
import softball from "./photos/softball.JPG";
import Carousel from "./Carousel";

export default function Meet() {
  const photosArr = [dubs, flowtest, NiehausStatue, softball];

  const photosObj = {
    photo1: {
      photoImage: dubs,
      alt: "OP with husky mascot at UW",
      caption: "Hanging out with Dubs, the UW husky mascot!",
    },
    photo2: {
      photoImage: flowtest,
      alt: "OP performing civil engineering tests",
      caption:
        "Performing high pressure flowtests on fire hydrants... on Halloween",
    },
    photo3: {
      photoImage: NiehausStatue,
      alt: "OP posing with statue",
      caption: "Celebrating a rare Seattle Mariners win!",
    },
    photo4: {
      photoImage: softball,
      alt: "OP swinging baseball bat",
      caption: "Defending our championship trophy with a leadoff single",
    },
  };

  return (
    <div
      className="lg:w-8/12 w-full lg:mx-auto border border-black border-2 bg-dclpal1-400 lg:px-4"
      id="meet-me"
    >
      <FirstHeader text="Meet me" />
      <div className="flex flex-col lg:flex-row items-center mt-4">
        <div className="text-left lg:py-8 lg:pl-6 lg:pr-4 lg:w-1/2 p-2">
          <p>
            Hi! My name is Dion Leung, and I've been a Seattle area native my
            whole life. I grew up and lived in Kent for the first 18 years of my
            life, then moved to Seattle where I attended the University of
            Washington, earning a degree in Civil and Environmental Engineering.
            A couple of years into my career, I was feeling stuck and
            pigeon-holed, unable to advance further without an advanced degree.
            I had used AutoCAD daily, and I had tried out coding in AutoLISP and
            loved it. I decided to switch things up completely and pursue a
            career in web-development and here I am!
          </p>
          <br />
          <p>
            In my time as a junior web developer, I have been able to learn a
            lot of both back-end and front-end development. Despite going into
            my coding bootcamp drawn towards back-end systems, in particular
            database management, I really enjoy front-end technologies like
            React! Still, I am also exploring data-science and other analytical
            aspects. In my spare time I enjoy spending time outdoors (only if I
            take my allergy medicine!), playing sports like basketball, soccer,
            volleyball, and baseball, and making progress on my seemingly
            neverending list of shows to watch.
          </p>
        </div>
        <div className="flex flex-col lg:w-1/2 lg:pr-4 w-full p-2">
          <img
            className=""
            src={flowtest}
            alt="OP performing civil engineering tests"
          />
          <small className="text-center">
            Performing high pressure flowtests on fire hydrants... on Halloween
          </small>
        </div>
        {/* {photosArr.map((photo) => {
          return (
            <Carousel photoImage={photo} alt="temporary" caption="Filler" />
          );
        })} */}
      </div>
      <br />
    </div>
  );
}
