import React, { Component } from "react";
// import ScrollableAnchor from "react-scrollable-anchor";

export default class Navbar extends Component {
  render() {
    return (
      <div className="flex justify-around border-solid border-2 border-black w-full py-8 fixed top-0 mb-10 bg-opacity-50 bg-yellow-700 z-20">
        {/* <div> */}
        {/* <Link to="/" className="text-4xl">
          Welcome
        </Link> */}
        {/* </div> */}
        <div>
          {/* <ScrollableAnchor id={"meet-me"}> */}
          <a href="#meet-me">meet me</a>
          {/* </ScrollableAnchor> */}
        </div>
        <div>
          <a href="#about-me">about me</a>
        </div>
        {/* <ScrollableAnchor id={"contact"}>
        <a href="#contact">contact</a>
      </ScrollableAnchor> */}
        <div>
          {/* <ScrollableAnchor id={"portfolio"}> */}
          <a href="#portfolio">portfolio</a>
          {/* </ScrollableAnchor> */}
        </div>
        <div>
          {/* <ScrollableAnchor id={"testimonials"}> */}
          <a href="#testimonials">testimonials</a>
          {/* </ScrollableAnchor> */}
        </div>
        <div>
          <a href="#contact">contact</a>
        </div>
        <div>
          <h1 className="text-lg">Hamburger</h1>
        </div>
      </div>
    );
  }
}
