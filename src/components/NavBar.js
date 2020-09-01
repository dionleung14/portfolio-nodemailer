import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <div className="flex justify-around border-solid border-2 border-black w-full py-8 fixed top-0 mb-10 bg-opacity-50 bg-yellow-700 z-20">
      <div>
        {/* <Link to="/" className="text-4xl"> */}
        Welcome
        {/* </Link> */}
      </div>
      <AnchorLink href="#about-me" className="text-lg">
        about me
      </AnchorLink>
      <AnchorLink href="#contact" className="text-lg">
        contact
      </AnchorLink>
      <div>
        <h1 className="text-lg">Hamburger</h1>
      </div>
    </div>
  );
}
