import React from "react";
import linkedInSeattle from "../../../components/photos/linkedin-Seattle.jpg";
import github from "../../../components/photos/github-icon.png";
import linkedin from "../../../components/photos/linkedin-icon.png";
import emailIcon from "../../../components/photos/email-icon.png";
import twitter from "../../../components/photos/twitter-icon.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

export default function Welcome(props) {
  const socialLinks = [
    {
      href: "https://github.com/dionleung14",
      src: github,
      alt: "GitHub",
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/leungdion/",
      src: linkedin,
      alt: "LinkedIn",
      label: "LinkedIn",
    },
    {
      href: "mailto:dioncleung@gmail.com",
      src: emailIcon,
      alt: "Email",
      label: "Email",
    },
    {
      href: "https://www.twitter.com/DionTheDev",
      src: twitter,
      alt: "Twitter",
      label: "Twitter",
    },
  ];

  return (
    <section id="top" className="hero-cinematic" aria-label="Introduction">
      <div className="hero-cinematic__media" aria-hidden="true">
        <img src={linkedInSeattle} alt="" />
      </div>
      <div className="hero-cinematic__veil" aria-hidden="true" />
      <div className="hero-cinematic__content">
        <h1 className="hero-cinematic__brand font-display">Dion Leung</h1>
        <p className="hero-cinematic__role">
          Full-Stack Web Developer · E.I.T
        </p>
        <p className="hero-cinematic__lede">
          Seattle-based engineer building thoughtful web experiences—bridging
          civil engineering rigor with modern product craft.
        </p>
        <div className="hero-cinematic__actions">
          <AnchorLink href="#portfolio" className="hero-cta hero-cta--primary">
            Selected works
          </AnchorLink>
          <Link to="/portfolio" className="hero-cta hero-cta--ghost">
            Full portfolio
          </Link>
          <AnchorLink href="#contact" className="hero-cta hero-cta--ghost">
            Contact
          </AnchorLink>
        </div>
        <div className="hero-cinematic__social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link">
              <img src={link.src} alt={link.alt} />
              <small>{link.label}</small>
            </a>
          ))}
        </div>
      </div>
      <div className="hero-cinematic__scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="hero-cinematic__scroll-line" />
      </div>
    </section>
  );
}
