import React, { useState } from "react";
// import { BrowserRouter as Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import icon8 from "./photos/icons8-menu-64.png";

export default function Navbar(props) {
  const [burger, setBurger] = useState({
    display: false,
  });

  const handleToggle = ({ target }) =>
    setBurger((s) => ({ ...s, [target.name]: !s[target.name] }));

  const handleHide = () => {
    setBurger({
      ...burger,
      display: false,
    });
  };

  return (
    <div>
      <div
        className={`flex justify-around w-full lg:pt-4 lg:pb-4 fixed top-0 mb-10 z-40 ${
          props.darkModeApp.darkMode
            ? `bg-dclpal1-100 text-white`
            : `bg-white text-dclpal1-100`
        }`}
      >
        <AnchorLink
          href="#top"
          className={`lg:text-4xl text-2xl border border-transparent px-2 rounded ${
            props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          Welcome
        </AnchorLink>
        <AnchorLink
          href="#about-me"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          about me
        </AnchorLink>
        <AnchorLink
          href="#meet-me"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          meet me
        </AnchorLink>
        <AnchorLink
          href="#qualifications"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          qualifications
        </AnchorLink>
        <AnchorLink
          href="#portfolio"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          portfolio
        </AnchorLink>
        <AnchorLink
          href="#testimonials"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          testimonials
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          contact
        </AnchorLink>
        {props.toggle()}
        <img
          src={icon8}
          alt="mand icon"
          name="display"
          onClick={handleToggle}
          className="lg:hidden self-center inline-block w-6 z-50"
        />
      </div>
      <div
        className={`${
          burger.display ? "inline-block" : "hidden"
        } pt-12 fixed right-0 w-auto h-auto bg-dclpal1-500 z-30 flex text-white border border-black flex-col pr-2`}
      >
        <div onClick={handleHide}>
          <AnchorLink
            href="#about-me"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg"
          >
            about me
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#meet-me"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg"
          >
            meet me
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#qualifications"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg"
          >
            qualifications
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#portfolio"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg"
          >
            portfolio
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#testimonials"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg"
          >
            testimonials
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#contact"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg"
          >
            contact
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}
