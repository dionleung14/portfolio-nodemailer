import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import hamburger from "./photos/hamburger.png";

export default function Navbar() {
  return (
    <div className="flex justify-around border-solid border-2 border-black w-full lg:pt-4 lg:pb-4 fixed top-0 mb-10 bg-teal-300 z-20">
      <AnchorLink
        href="#top"
        className="lg:text-4xl text-2xl border border-transparent hover:border-blue-600 px-2 rounded"
      >
        Welcome
      </AnchorLink>
      <AnchorLink
        href="#about-me"
        className="hidden lg:inline-block self-center border border-transparent hover:border-red-700 px-2 rounded text-lg"
      >
        about me
      </AnchorLink>
      <AnchorLink
        href="#meet-me"
        className="hidden lg:inline-block self-center border border-transparent hover:border-red-700 px-2 rounded text-lg"
      >
        meet me
      </AnchorLink>
      <AnchorLink
        href="#qualifications"
        className="hidden lg:inline-block self-center border border-transparent hover:border-red-700 px-2 rounded text-lg"
      >
        qualifications
      </AnchorLink>
      <AnchorLink
        href="#portfolio"
        className="hidden lg:inline-block self-center border border-transparent hover:border-red-700 px-2 rounded text-lg"
      >
        portfolio
      </AnchorLink>
      <AnchorLink
        href="#testimonials"
        className="hidden lg:inline-block self-center border border-transparent hover:border-red-700 px-2 rounded text-lg"
      >
        testimonials
      </AnchorLink>
      <AnchorLink
        href="#contact"
        className="hidden lg:inline-block self-center border border-transparent hover:border-red-700 px-2 rounded text-lg"
      >
        contact
      </AnchorLink>
      <img
        src={hamburger}
        alt=""
        className="lg:hidden self-center inline-block w-6"
      />
    </div>
  );
}
