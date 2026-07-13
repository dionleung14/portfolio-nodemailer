import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import ComponentContainer from "../../../components/ComponentContainer";
import Testimonial from "../../../models/Testimonial";

const AUTO_ADVANCE_MS = 5000;

export default function Testimonials(props) {
  const testimonials = Testimonial.all();
  const [tracker, setTracker] = useState(0);

  const activeIndex =
    testimonials.length > 0
      ? ((tracker % testimonials.length) + testimonials.length) %
        testimonials.length
      : 0;

  useEffect(() => {
    if (testimonials.length < 2) {
      return undefined;
    }

    const timerId = setInterval(() => {
      setTracker((current) => current + 1);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timerId);
  }, [tracker, testimonials.length]);

  const decrement = () => {
    setTracker((current) => current - 1);
  };

  const increment = () => {
    setTracker((current) => current + 1);
  };

  const goTo = (index) => {
    setTracker(index);
  };

  const currentTest = testimonials[activeIndex];
  const darkMode = props.darkModeApp.darkMode;

  const navButtonClass = `lg:p-2 rounded-full w-8 h-8 flex items-center justify-center border-2 ${
    darkMode
      ? "border-white bg-dclpal1-100 text-white hover:bg-dclpal1-500 hover:text-white"
      : "border-dclpal1-100 bg-white text-black hover:bg-dclpal1-400 hover:text-white"
  }`;

  if (!currentTest) {
    return null;
  }

  return (
    <ComponentContainer
      id="testimonials"
      color="5"
      darkModeCont={darkMode}>
      <Header
        text="Testimonials"
        color="5"
        darkModeHeader={darkMode}
      />
      <div className="h-dionBrowser flex flex-col items-center justify-center">
        <div className="flex items-center justify-around lg:px-6 my-4 w-full">
          <button
            type="button"
            aria-label="Previous testimonial"
            className={navButtonClass}
            onClick={decrement}>
            {`<`}
          </button>
          <div
            key={activeIndex}
            className="w-3/4 flex flex-col testimonial-slide">
            <h1 className="text-justify">{currentTest.message}</h1>
            <h1 className="text-center italic mt-2">
              - {currentTest.from}, {currentTest.relationship}
            </h1>
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            className={navButtonClass}
            onClick={increment}>
            {`>`}
          </button>
        </div>
        <div
          className="flex items-center justify-center flex-wrap mb-4"
          role="tablist"
          aria-label="Testimonial markers">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`${testimonial.from}-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show testimonial from ${testimonial.from}`}
                title={testimonial.from}
                className={`mx-1 my-1 w-3 h-3 rounded-full border-2 transition-colors duration-200 focus:outline-none ${
                  isActive
                    ? darkMode
                      ? "bg-white border-white"
                      : "bg-dclpal1-100 border-dclpal1-100"
                    : darkMode
                      ? "bg-transparent border-white hover:bg-white hover:bg-opacity-40"
                      : "bg-transparent border-dclpal1-100 hover:bg-dclpal1-400"
                }`}
                onClick={() => goTo(index)}
              />
            );
          })}
        </div>
      </div>
    </ComponentContainer>
  );
}
