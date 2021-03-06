import React, { Component } from "react";
import ComponentContainer from "../../../components/ComponentContainer.js";
import Header from "../../../components/Header";
import headshot from "../../../components/photos//headshot1.jpg";
// import Emoji from "./Emoji";

export default class About extends Component {
  render(props) {
    return (
      <ComponentContainer
        id="about-me"
        color="0"
        darkModeCont={this.props.darkModeApp.darkMode}>
        <Header
          text="About Me"
          color={0}
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
                className="hover:underline text-dclpal1-300">
                Dalena Nguyen
              </a>
            </p>
          </div>
          <div className="flex flex-wrap md:flex-col md:w-1/2 w-full">
            <p className="mx-4 my-2">
              {/* <Emoji emoji="✅" label="checkmark" /> */}
              Full-Stack Web Developer
            </p>
            <br />
            <p className="mx-4 my-2">
              {/* <Emoji emoji="✅" label="checkmark" /> */}
              React.js
            </p>
            <br />
            <p className="mx-4 my-2">
              {/* <Emoji emoji="✅" label="checkmark" /> */}
              Express.js
            </p>
            <br />
            <p className="mx-4 my-2">
              {/* <Emoji emoji="✅" label="checkmark" /> */}
              Node.js
            </p>
            <br />
            <p className="mx-4 my-2">
              {/* <Emoji emoji="✅" label="checkmark" /> */}
              MongoDB
            </p>
            <br />
            <p className="mx-4 my-2">
              {/* <Emoji emoji="✅" label="checkmark" /> */}
              MySQL
            </p>
            <br />
            <p className="mx-4 my-2">
              {/* <Emoji emoji="✅" label="checkmark" /> */}
              B.S. Civil & Environmental Engineering, University of Washington
            </p>
            <br />
            <p className="mx-4 my-2">
              {/* <Emoji emoji="✅" label="checkmark" /> */}
              Civil & Environmental Engineer-In-Training (EIT)
            </p>
            <br />
            <p className="mx-4 my-2">
              {/* <Emoji emoji="✅" label="checkmark" /> */}
              Seattle native
            </p>
            <br />
          </div>
        </div>
      </ComponentContainer>
    );
  }
}
