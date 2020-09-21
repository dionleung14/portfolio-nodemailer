import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Footer extends Component {
  render(props) {
    return (
      <div
        className={`w-full h-auto lg:h-24 flex justify-around items-center border-t ${
          this.props.darkModeApp.darkMode
            ? "border-white bg-dclpal1-100 text-white"
            : "border-black"
        }`}
      >
        <AnchorLink
          href="#top"
          className={`border border-transparent px-2 rounded ${
            this.props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          Back to top
        </AnchorLink>
        <a
          href="https://github.com/dionleung14"
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-transparent px-2 rounded ${
            this.props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/leungdion/"
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-transparent px-2 rounded ${
            this.props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          LinkedIn
        </a>
        <a
          href="mailto:dioncleung@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-transparent px-2 rounded ${
            this.props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          Email
        </a>
        <a
          href="https://www.twitter.com/DionTheDev"
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-transparent px-2 rounded ${
            this.props.darkModeApp.darkMode
              ? "hover:border-white"
              : "hover:border-dclpal1-100"
          }`}
        >
          Twitter
        </a>
        <div>Copyright &copy; 2020</div>
      </div>
    );
  }
}
