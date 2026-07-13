import React, { useEffect, useRef, useState } from "react";
import Header from "../../../components/Header";
import ComponentContainer from "../../../components/ComponentContainer";
import Testimonial from "../../../models/Testimonial";

export default function Testimonials(props) {
  const testimonials = Testimonial.all();
  const [tracker, setTracker] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const remainingMsRef = useRef(Testimonial.defaultDurationMs);
  const startedAtRef = useRef(Date.now());

  const activeIndex =
    testimonials.length > 0
      ? ((tracker % testimonials.length) + testimonials.length) %
        testimonials.length
      : 0;

  const currentTest = testimonials[activeIndex];
  const durationMs =
    currentTest?.durationMs ?? Testimonial.defaultDurationMs;

  useEffect(() => {
    remainingMsRef.current = durationMs;
    startedAtRef.current = Date.now();
    setIsPaused(false);
  }, [tracker, durationMs]);

  useEffect(() => {
    if (testimonials.length < 2 || !currentTest || isPaused) {
      return undefined;
    }

    startedAtRef.current = Date.now();
    const timerId = setTimeout(() => {
      setTracker((current) => current + 1);
    }, remainingMsRef.current);

    return () => {
      const elapsed = Date.now() - startedAtRef.current;
      remainingMsRef.current = Math.max(0, remainingMsRef.current - elapsed);
      clearTimeout(timerId);
    };
  }, [tracker, testimonials.length, currentTest, durationMs, isPaused]);

  const decrement = () => {
    setTracker((current) => current - 1);
  };

  const increment = () => {
    setTracker((current) => current + 1);
  };

  const goTo = (index) => {
    setTracker(index);
  };

  const togglePause = () => {
    setIsPaused((paused) => !paused);
  };

  const darkMode = props.darkModeApp.darkMode;

  const navButtonClass = `lg:p-2 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center border-2 ${
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
      <div className="testimonial-carousel">
        <div className="testimonial-carousel__content flex items-stretch justify-around lg:px-6 my-4 w-full">
          <button
            type="button"
            aria-label="Previous testimonial"
            className={`${navButtonClass} self-center`}
            onClick={decrement}>
            {`<`}
          </button>
          <div
            key={activeIndex}
            className="w-3/4 flex flex-col justify-center testimonial-slide">
            <h1 className="text-justify">{currentTest.message}</h1>
            <h1 className="text-center italic mt-2">
              - {currentTest.from}, {currentTest.relationship}
            </h1>
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            className={`${navButtonClass} self-center`}
            onClick={increment}>
            {`>`}
          </button>
        </div>
        <div className="testimonial-carousel__controls">
          {testimonials.length > 1 && (
            <button
              type="button"
              className={`testimonial-timer ${
                darkMode ? "testimonial-timer--dark" : ""
              } ${isPaused ? "testimonial-timer--paused" : ""}`}
              onClick={togglePause}
              aria-pressed={isPaused}
              aria-label={
                isPaused
                  ? "Resume automatic testimonial advance"
                  : "Pause automatic testimonial advance"
              }
              title={isPaused ? "Click to resume" : "Click to pause"}>
              <span
                key={`${tracker}-${durationMs}`}
                className={`testimonial-timer__fill ${
                  isPaused ? "testimonial-timer__fill--paused" : ""
                }`}
                style={{ animationDuration: `${durationMs}ms` }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={Math.round(durationMs / 1000)}
                aria-valuetext={
                  isPaused
                    ? "Paused"
                    : `${Math.round(durationMs / 1000)} second countdown`
                }
              />
            </button>
          )}
          <div
            className="flex items-center justify-center flex-wrap"
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
      </div>
    </ComponentContainer>
  );
}
