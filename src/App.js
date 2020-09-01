import React from "react";
// import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Meet from "./components/Meet";
import Quals from "./components/Quals";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Switch> */}
      {/* <Route exact path="/about-me"> */}
      <Welcome />
      <ScrollableAnchor id={"about-me"}>
        <About />
      </ScrollableAnchor>
      {/* </Route> */}
      {/* <About /> */}
      <ScrollableAnchor id={"meet-me"}>
        <Meet />
      </ScrollableAnchor>
      <ScrollableAnchor id={"qualifications"}>
        <Quals />
      </ScrollableAnchor>
      <ScrollableAnchor id={"portfolio"}>
        <Portfolio />
      </ScrollableAnchor>
      <ScrollableAnchor id={"testimonials"}>
        <Testimonials />
      </ScrollableAnchor>
      <ScrollableAnchor id={"contact"}>
        <ContactForm />
      </ScrollableAnchor>
      {/* </Switch> */}
    </div>
  );
}

export default App;
