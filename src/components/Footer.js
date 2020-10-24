import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Footer extends Component {
  render(props) {
    return (
      <div
        className={`w-full h-auto lg:h-48  border-t ${
          this.props.darkModeApp.darkMode
            ? "border-white bg-dclpal1-100 text-white"
            : "border-black"
        }`}
      >
        <div className="flex flex-row justify-around my-4">
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
        <div className="flex flex-row justify-around my-8">
          Powered by React, Axios, NodeMailer, React Anchor Link Smooth Scroll,
          and React Router Dom. Styled with Tailwind CSS
        </div>
      </div>
    );
  }
}
