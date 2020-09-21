import React, { Component } from "react";
import ComponentContainer from "./ComponentContainer.js";
import FirstHeader from "./FirstHeader";
import headshot from "./photos/headshot1.jpg";
import Emoji from "./Emoji";

export default class About extends Component {
  render(props) {
    return (
      <ComponentContainer
        id="about-me"
        darkModeCont={this.props.darkModeApp.darkMode}
      >
        <FirstHeader
          text="About Me"
          darkModeHeader={this.props.darkModeApp.darkMode}
        />
        <div className="flex md:flex-row flex-col items-center justify-around px-6">
          <div className="lg:w-1/2 w-full lg:mx-4 my-2 lg:my-6">
            <img
              className="md:w-auto md:h-auto w-3/4 mx-auto"
              src={headshot}
              alt="headshot"
            />
            <p className="text-xs text-center italic">
              Photo taken by{" "}
              <a
                href="https://www.dalenanguyen.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-dclpal1-300"
              >
                Dalena Nguyen
              </a>
            </p>
          </div>
          <div className="flex flex-wrap md:flex-col md:w-1/2 w-full">
            <p className="mx-4 my-2">
              <Emoji emoji="✅" label="checkmark" />
              Full-Stack Web Developer
            </p>
            <br />
            <p className="mx-4 my-2">
              <Emoji emoji="✅" label="checkmark" />
              React
            </p>
            <br />
            <p className="mx-4 my-2">
              <Emoji emoji="✅" label="checkmark" />
              Express
            </p>
            <br />
            <p className="mx-4 my-2">
              <Emoji emoji="✅" label="checkmark" />
              Node.js
            </p>
            <br />
            <p className="mx-4 my-2">
              <Emoji emoji="✅" label="checkmark" />
              MongoDB
            </p>
            <br />
            <p className="mx-4 my-2">
              <Emoji emoji="✅" label="checkmark" />
              MySQL
            </p>
            <br />
            <p className="mx-4 my-2">
              <Emoji emoji="✅" label="checkmark" />
              B.S. Civil and Environmental Engineering, University of Washington
            </p>
            <br />
            <p className="mx-4 my-2">
              <Emoji emoji="✅" label="checkmark" />
              Civil and Environmental Engineer-In-Training (EIT)
            </p>
            <br />
            <p className="mx-4 my-2">
              <Emoji emoji="✅" label="checkmark" />
              Seattle native
            </p>
            <br />
          </div>
        </div>
      </ComponentContainer>
    );
  }
}
