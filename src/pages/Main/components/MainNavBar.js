import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import icon8 from "../../../components/photos/icons8-menu-64.png";
import dcl_logoFav from "../../../components/photos/logo_dcl_favicon.png";

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

  const dark = props.darkModeApp.darkMode;
  const navLinkClass = `site-nav__link hidden lg:inline-block self-center border border-transparent px-2 rounded text-lg ${
    dark
      ? "hover:border-white text-white hover:bg-dclpal1-500"
      : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100"
  }`;

  return (
    <div>
      <div
        className={`site-nav flex justify-around w-full lg:pt-4 lg:pb-4 fixed top-0 mb-10 z-40 ${
          dark ? "site-nav--dark text-white" : "site-nav--light text-dclpal1-100"
        }`}>
        <AnchorLink
          href="#top"
          className={`site-nav__link lg:text-4xl text-2xl border border-transparent p-2 rounded ${
            dark
              ? "hover:border-white text-white hover:bg-dclpal1-500"
              : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100"
          }`}>
          <img src={dcl_logoFav} alt="logo, link to home page" />
        </AnchorLink>
        <AnchorLink href="#about-me" className={navLinkClass}>
          about me
        </AnchorLink>
        <AnchorLink href="#meet-me" className={navLinkClass}>
          meet me
        </AnchorLink>
        <AnchorLink href="#qualifications" className={navLinkClass}>
          qualifications
        </AnchorLink>
        <AnchorLink href="#portfolio" className={navLinkClass}>
          portfolio
        </AnchorLink>
        <AnchorLink href="#testimonials" className={navLinkClass}>
          testimonials
        </AnchorLink>
        <AnchorLink href="#contact" className={navLinkClass}>
          contact
        </AnchorLink>
        {props.toggle()}
        <img
          src={icon8}
          alt="menu icon"
          name="display"
          onClick={handleToggle}
          className="lg:hidden self-center inline-block w-6 z-50 cursor-pointer"
        />
      </div>
      <div
        className={`${
          burger.display ? "inline-block" : "hidden"
        } pt-16 fixed right-0 w-auto h-auto bg-dclpal1-500 z-30 flex text-white border border-black flex-col pr-2`}>
        <div onClick={handleHide}>
          <AnchorLink
            href="#about-me"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            about me
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#meet-me"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            meet me
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#qualifications"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            qualifications
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#portfolio"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            portfolio
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink
            href="#testimonials"
            className="inline-block self-start border border-transparent hover:border-red-700 px-2 rounded text-lg">
            testimonials
          </AnchorLink>
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
