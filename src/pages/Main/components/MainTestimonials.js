import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import ComponentContainer from "../../../components/ComponentContainer";
import testimonialData from '../../../data/testimonialData'
require("dotenv").config();

export default function Testimonials(props) {
  let [tracker, setTracker] = useState(0);

  // const  setInterval(() => {
  //   setTracker(tracker + 1);
  // }, 1000);

  const decrement = () => {
    setTracker(tracker - 1);
  };

  const increment = () => {
    setTracker(tracker + 1);
  };

  const testimonials = testimonialData;

  let currentTest = testimonials[Math.abs(tracker) % testimonials.length];

  return (
    <ComponentContainer
      id="testimonials"
      color="5"
      darkModeCont={props.darkModeApp.darkMode}>
      <Header
        text="Testimonials"
        color="5"
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
            onClick={decrement}>
            {`<`}
          </button>
          {/* {testimonialAuto} */}
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
            }}>
            {`>`}
          </button>
        </div>
      </div>
      {/* <div>{tracker}</div> */}
    </ComponentContainer>
  );
}
