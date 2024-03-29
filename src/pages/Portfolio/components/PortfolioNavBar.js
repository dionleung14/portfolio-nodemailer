import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import icon8 from "../../../components/photos/icons8-menu-64.png";
import dcl_logoFav from "../../../components/photos/logo_dcl_favicon.png";

export default function PortfolioNavBar(props) {
  const [burger, setBurger] = useState({
    display: false,
  });

  const handleToggle = ({ target }) =>
    setBurger(s => ({ ...s, [target.name]: !s[target.name] }));

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
        }`}>
        <div
          className={`lg:text-4xl text-2xl border border-transparent p-2 rounded ${
            props.darkModeApp.darkMode
              ? "hover:border-white bg-dclpal1-100 text-white hover:bg-dclpal1-500"
              : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100 hover:bg-dclpal1-100"
          }`}>
          <Link to="/">
            <img src={dcl_logoFav} alt="logo, link to home page" />
          </Link>
        </div>
        <AnchorLink
          href="#top"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white bg-dclpal1-100 text-white hover:bg-dclpal1-500"
              : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100 hover:bg-dclpal1-100"
          }`}>
          project collection
        </AnchorLink>
        <AnchorLink
          href="#freelance"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white bg-dclpal1-100 text-white hover:bg-dclpal1-500"
              : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100 hover:bg-dclpal1-100"
          }`}>
          freelance & contract
        </AnchorLink>
        <AnchorLink
          href="#personal"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white bg-dclpal1-100 text-white hover:bg-dclpal1-500"
              : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100 hover:bg-dclpal1-100"
          }`}>
          personal
        </AnchorLink>
        <AnchorLink
          href="#bootcamp"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white bg-dclpal1-100 text-white hover:bg-dclpal1-500"
              : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100 hover:bg-dclpal1-100"
          }`}>
          bootcamp
        </AnchorLink>
        <div
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white bg-dclpal1-100 text-white hover:bg-dclpal1-500"
              : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100 hover:bg-dclpal1-100"
          }`}>
          <Link to="/archive">archive</Link>
        </div>
        <AnchorLink
          href="#contact"
          className={`hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
            props.darkModeApp.darkMode
              ? "hover:border-white bg-dclpal1-100 text-white hover:bg-dclpal1-500"
              : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100 hover:bg-dclpal1-100"
          }`}>
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
        } pt-16 fixed right-0 w-auto h-auto bg-dclpal1-500 z-30 flex text-white border border-black flex-col pr-2`}>
        <div
          className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg"
          onClick={handleHide}>
          <Link to="/">home</Link>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#freelance"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            freelance
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#personal"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            personal
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#bootcamp"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            bootcamp
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <Link
            to="/archive"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            archive
          </Link>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#contact"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            contact
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#top"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            back to top
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}
