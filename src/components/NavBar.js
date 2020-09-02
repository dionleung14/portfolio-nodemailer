import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import hamburger from "./photos/hamburger.png";

export default function Navbar() {
  return (
    <div className="flex justify-around border-solid border-2 border-black w-full lg:pt-8 lg:pb-4 fixed top-0 mb-10 bg-teal-300 z-20">
      <AnchorLink href="#top" className="lg:text-4xl text-2xl">
        Welcome
      </AnchorLink>
      <AnchorLink href="#about-me" className="hidden lg:inline-block text-lg">
        about me
      </AnchorLink>
      <AnchorLink href="#meet-me" className="hidden lg:inline-block text-lg">
        meet me
      </AnchorLink>
      <AnchorLink
        href="#qualifications"
        className="hidden lg:inline-block text-lg"
      >
        qualifications
      </AnchorLink>
      <AnchorLink href="#portfolio" className="hidden lg:inline-block text-lg">
        portfolio
      </AnchorLink>
      <AnchorLink
        href="#testimonials"
        className="hidden lg:inline-block text-lg"
      >
        testimonials
      </AnchorLink>
      <AnchorLink href="#contact" className="hidden lg:inline-block text-lg">
        contact
      </AnchorLink>
      <div>
        <img src={hamburger} alt="" className="lg:hidden w-12" />
      </div>
    </div>
  );
}
