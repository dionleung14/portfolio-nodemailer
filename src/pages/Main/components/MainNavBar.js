import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import icon8 from "../../../components/photos/icons8-menu-64.png";
import dcl_logoFav from "../../../components/photos/logo_dcl_favicon.png";
import useSolidNavOnScroll from "../../../hooks/useSolidNavOnScroll";

export default function Navbar(props) {
  const [burger, setBurger] = useState({
    display: false,
  });
  const isSolid = useSolidNavOnScroll(40);

  const handleToggle = () =>
    setBurger((s) => ({ ...s, display: !s.display }));

  const handleHide = () => {
    setBurger({
      ...burger,
      display: false,
    });
  };

  const dark = props.darkModeApp.darkMode;
  const navLinkClass = `site-nav__link self-center border border-transparent px-2 rounded text-lg ${
    dark
      ? "hover:border-white text-white hover:bg-dclevergreen-100"
      : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100"
  }`;

  return (
    <div>
      <div
        className={`site-nav flex items-center justify-between w-full px-3 lg:px-6 py-2 lg:py-4 fixed top-0 z-40 ${
          dark ? "site-nav--dark text-white" : "site-nav--light text-dclpal1-100"
        } ${isSolid ? "site-nav--solid" : ""}`}>
        <AnchorLink
          href="#top"
          className={`site-nav__link border border-transparent p-1 rounded flex-shrink-0 ${
            dark
              ? "hover:border-white text-white hover:bg-dclevergreen-100"
              : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100"
          }`}>
          <img
            src={dcl_logoFav}
            alt="logo, link to home page"
            className="site-nav__logo"
          />
        </AnchorLink>
        <div className="site-nav__desktop hidden lg:flex items-center justify-around flex-grow mx-4">
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
        </div>
        <div className="site-nav__actions flex items-center flex-shrink-0">
          {props.toggle()}
          <button
            type="button"
            aria-label={burger.display ? "Close menu" : "Open menu"}
            aria-expanded={burger.display}
            onClick={handleToggle}
            className="site-nav__burger lg:hidden">
            <img src={icon8} alt="" className="w-6 h-6 pointer-events-none" />
          </button>
        </div>
      </div>
      <div
        className={`site-nav__drawer ${
          burger.display ? "site-nav__drawer--open" : ""
        }`}>
        <div onClick={handleHide}>
          <AnchorLink href="#about-me" className="site-nav__drawer-link">
            about me
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink href="#meet-me" className="site-nav__drawer-link">
            meet me
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink href="#qualifications" className="site-nav__drawer-link">
            qualifications
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink href="#portfolio" className="site-nav__drawer-link">
            portfolio
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink href="#testimonials" className="site-nav__drawer-link">
            testimonials
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink href="#contact" className="site-nav__drawer-link">
            contact
          </AnchorLink>
        </div>
        <div onClick={handleHide}>
          <AnchorLink href="#top" className="site-nav__drawer-link">
            back to top
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}
