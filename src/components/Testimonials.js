import React, { useState } from "react";
import FirstHeader from "./FirstHeader";

export default function Testimonials() {
  let [tracker, setTracker] = useState(0);

  const decrement = () => {
    setTracker(tracker--);
  };

  const increment = () => {
    setTracker(tracker++);
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
      relationship: "co-collaborator",
    },
    {
      from: "Louis Coleman",
      message: `Dion and I worked together on a few projects while taking a Full Stack Web Development course through the University of Washington. It was apparent from the start that Dion is extremely passionate and driven about coding. He was always early to class with questions and wanting to learn more and push himself. As a member of two projects he showed many times about how driven he is to put out the best work and often times in my opinion would go above and beyond the goals set, and would drive others to do the same.

      He is also someone that is also compassionate and willing to work with others on their issues and to strengthen their understanding.
      
      All in all Dion is someone that I hope to work with in the future and would be a fantastic addition and huge asset to any team that is lucky enough to have him.`,
      relationship: "co-collaborator",
    },
  ];

  let currentTest = testimonials[Math.abs(tracker) % testimonials.length];

  return (
    <div
      className="lg:w-8/12 w-full lg:mx-auto border border-black border-2 lg:px-4 bg-dclpal1-400"
      id="testimonials"
    >
      <FirstHeader text="Testimonials" />
      <div className="flex items-center justify-around lg:px-6 lg:py-12 my-4 ">
        <button
          className="border-white border-2 lg:p-2 px-1 mx-1 rounded"
          onClick={decrement}
        >
          {`<`}
        </button>
        <div className="w-3/4 lg:h-auto flex flex-col">
          <div className="my-auto">
            <h1 className="text-justify">{currentTest.message}</h1>
            <h1 className="text-center">
              {" "}
              - {currentTest.from}, {currentTest.relationship}{" "}
            </h1>
          </div>
        </div>
        <button
          className="border-white border-2 lg:p-2 px-1 mx-1 rounded"
          onClick={increment}
        >
          {`>`}
        </button>
      </div>
      <div>{tracker.track}</div>
    </div>
  );
}
