import React from "react";
import photograph from "./photos/linkedin-Seattle.jpg";
import FirstHeader from "./FirstHeader";

export default function Welcome() {
  return (
    <div
      className="lg:w-8/12 w-full mx-auto border border-black border-2 lg:px-4"
      id="top"
    >
      <FirstHeader text="Dion Leung, E.I.T, Fullstack Web Developer" />
      <div className="top-0 pt-4 pb-20 z-10">
        {/* <h1 className="text-center text-4xl top-0 pt-10">Text with photo</h1> */}
        <img
          src={photograph}
          // className="object-center ml-2 h-40"
          // className="z-10"
          id="photographhhhhhh"
          alt="Seattle-skyline"
        />
      </div>
    </div>
  );
}
