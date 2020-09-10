import React, { Component } from "react";
// import Header from "./Header.js";
import FirstHeader from "./FirstHeader";
import headshot from "./photos/headshot1.jpg";
import Emoji from "./Emoji";

export default class About extends Component {
  render() {
    return (
      <div
        className="lg:w-8/12 w-full lg:mx-auto lg:px-4 bg-dclpal1-400"
        id="about-me"
      >
        <FirstHeader text="About Me" />
        <div className="flex md:flex-row flex-col items-center justify-around border-white border-2 px-6">
          <div className="lg:w-1/2 w-full lg:mx-4 my-2 lg:my-6">
            <img
              className="md:w-auto md:h-auto w-3/4 mx-auto"
              src={headshot}
              alt="headshot"
            />
            <p className="text-xs text-center">
              Photo taken by{" "}
              <a
                href="https://www.dalenanguyen.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-yellow-900"
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
        {/* <div className="border-white border-2">
          <img
            className="border border-red-700 border-2 mx-auto"
            src="https://placekitten.com/400/400"
            alt="headshot"
          />
          <p className="text-xs text-center">Caption</p>
        </div> */}
      </div>
    );
  }
}
