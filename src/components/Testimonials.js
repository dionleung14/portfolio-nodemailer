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
      message: `lorem ipsum dolor set`,
      relationship: "co-collaborator",
    },
  ];

  let currentTest = testimonials[Math.abs(tracker) % testimonials.length];

  return (
    <div
      className="lg:w-8/12 w-full lg:mx-auto border border-black border-2 lg:px-4"
      id="testimonials"
    >
      <FirstHeader text="Testimonials" />
      <div className="flex items-center justify-around lg:px-6 lg:py-12 border-red-300 border-2">
        <button
          className="border-white border-2 lg:p-2 px-1 mx-1 rounded"
          onClick={decrement}
        >
          previous
        </button>
        <div className="w-2/3 lg:h-40 flex flex-col">
          <div className="my-auto">
            <h1 className="text-justify">{currentTest.message}</h1>
            <h1 className="text-center">
              {" "}
              - {currentTest.from}, {currentTest.relationship}{" "}
            </h1>
          </div>
        </div>
        <button
          className="border-white border-2 p-2 rounded"
          onClick={increment}
        >
          next
        </button>
      </div>
      <div>{tracker.track}</div>
    </div>
  );
}
