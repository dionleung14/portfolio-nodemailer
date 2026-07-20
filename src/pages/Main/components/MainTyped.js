import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Header from "../../../components/Header";
import ComponentContainer from "../../../components/ComponentContainer";

const TYPED_STRINGS = [
  "Full-Stack Web Developer",
  "React.js enthusiast",
  "Civil &amp; Environmental E.I.T",
  "Seattle native",
  "Builder of thoughtful web experiences",
];

export default function MainTyped(props) {
  const typedEl = useRef(null);
  const typedInstance = useRef(null);
  const dark = props.darkModeApp.darkMode;

  useEffect(() => {
    if (!typedEl.current) {
      return undefined;
    }

    typedInstance.current = new Typed(typedEl.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 55,
      backSpeed: 32,
      backDelay: 1400,
      startDelay: 400,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, []);

  return (
    <ComponentContainer
      id="typed"
      color="5"
      darkModeCont={dark}>
      <Header text="In a few words" color="5" darkModeHeader={dark} />
      <div className="typed-section">
        <p className="typed-section__lead section-copy">
          A quick pulse of who I am and what I build:
        </p>
        <p className="typed-section__line">
          I am a{" "}
          <span
            ref={typedEl}
            className={`typed-section__target ${
              dark ? "typed-section__target--dark" : ""
            }`}
          />
        </p>
      </div>
    </ComponentContainer>
  );
}
