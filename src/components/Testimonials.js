import React, { useState } from "react";
import FirstHeader from "./FirstHeader";
import TestimonialsContainer from "./TestimonialsContainer";
require("dotenv").config();

export default function Testimonials(props) {
  let [tracker, setTracker] = useState(0);

  const decrement = () => {
    setTracker(tracker - 1);
  };

  const increment = () => {
    setTracker(tracker + 1);
  };

  const testimonials = [
    {
      from: "Rory Kees",
      message: `Dion was a fantastic and skilled teammate to work with on our
      fullstack application. He remained calm and clear-headed through
      difficulties and was always willing to lend a hand to those who
      needed it. From start to finish, he showed an admirable amount of
      competence and flexibility. I would love to work with him on future
      projects.`,
      // relationship: "co-collaborator",
      relationship: process.env.POKEMON,
    },
    {
      from: "Louis Colman",
      message: `Dion and I worked together on a few projects while taking a Full Stack Web Development course through the University of Washington. It was apparent from the start that Dion is extremely passionate and driven about coding. He was always early to class with questions and wanting to learn more and push himself. As a member of two projects he showed many times about how driven he is to put out the best work and often times in my opinion would go above and beyond the goals set, and would drive others to do the same.

      He is also someone that is also compassionate and willing to work with others on their issues and to strengthen their understanding.
      
      All in all Dion is someone that I hope to work with in the future and would be a fantastic addition and huge asset to any team that is lucky enough to have him.`,
      relationship: "co-collaborator",
    },
    {
      from: "Clint Brodar",
      message: `You will be hard-pressed to find a hard worker like Dion. I had the pleasure of mentoring him while he was going through an intense 3-month web development boot camp. He impressed me throughout the course with his insight and how quickly he picked up new concepts and material. Dion was a pleasure to be around and he will be a tremendous asset to any team!`,
      relationship: "teaching assistant for UW Web Development Certificate",
    },
  ];

  let currentTest = testimonials[Math.abs(tracker) % testimonials.length];

  return (
    <TestimonialsContainer
      id="testimonials"
      darkModeCont={props.darkModeApp.darkMode}
    >
      <FirstHeader
        text="Testimonials"
        darkModeHeader={props.darkModeApp.darkMode}
      />
      <div className="h-dionBrowser flex items-center">
        <div className="flex items-center justify-around lg:px-6 my-4">
          <button
            className={`lg:p-2 rounded-full w-8 h-8 flex items-center border ${
              props.darkModeApp.darkMode
                ? "border-white border-2 bg-dclpal1-100 text-white hover:bg-dclpal1-500 hover:text-white"
                : "border-dclpal1-100 border-2 bg-white text-black hover:bg-dclpal1-400 hover:text-white"
            }`}
            onClick={decrement}
          >
            {`<`}
          </button>
          <div className="w-3/4 flex flex-col">
            <div className="">
              <h1 className="text-justify">{currentTest.message}</h1>
              <h1 className="text-center italic">
                {" "}
                - {currentTest.from}, {currentTest.relationship}{" "}
              </h1>
            </div>
          </div>
          <button
            className={`lg:p-2 rounded-full w-8 h-8 flex items-center rounded border ${
              props.darkModeApp.darkMode
                ? "border-white border-2 bg-dclpal1-100 text-white hover:bg-dclpal1-500 hover:text-white"
                : "border-dclpal1-100 border-2 bg-white text-black hover:bg-dclpal1-400 hover:text-white"
            }`}
            onClick={() => {
              increment();
            }}
          >
            {`>`}
          </button>
        </div>
      </div>
      {/* <div>{tracker}</div> */}
    </TestimonialsContainer>
  );
}
