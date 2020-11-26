import React, { useState } from "react";
// import logo from "./logo.svg";
import NavBar from "../components/NavBar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Meet from "../components/Meet";
import Quals from "../components/Quals";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

// console.log(process.env.REACT_APP_POKEMON);
// console.log(process.env.POKEMON);

function Main() {
  const [darkMode, setDarkMode] = useState({ darkMode: false });
  const handleToggle = () =>
    setDarkMode(s => ({ ...s, darkMode: !darkMode.darkMode }));

  const toggleSwitch = () => {
    return (
      <div
        name="darkMode"
        className={`px-2 self-center rounded border cursor-pointer ${
          darkMode.darkMode ? "border-white" : "border-dclpal1-100"
        }`}
        onClick={handleToggle}
      >
        {darkMode.darkMode ? "dark mode on!" : "dark mode?"}
      </div>
    );
  };

  return (
    <Router>
      <NavBar darkModeApp={darkMode} toggle={toggleSwitch} />
      {/* <Switch> */}
      {/* <Route exact path="/about-me"> */}
      <Welcome darkModeApp={darkMode} />
      <About darkModeApp={darkMode} />
      {/* </Route> */}
      {/* <About /> */}
      <Meet darkModeApp={darkMode} />
      <Quals darkModeApp={darkMode} />
      <Portfolio darkModeApp={darkMode} />
      <Testimonials darkModeApp={darkMode} />
      <ContactForm darkModeApp={darkMode} />
      <Footer darkModeApp={darkMode} />
      {/* </Switch> */}
    </Router>
  );
}

export default Main;