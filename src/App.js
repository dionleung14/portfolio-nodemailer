import React, { useState } from "react";
// import logo from "./logo.svg";
import Main from "./pages/Main";
import Archive from "./pages/Archive";
import Portfolio from "./pages/Portfolio";
import MetaPortfolio from "./pages/MetaPortfolio";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// console.log(process.env.REACT_APP_POKEMON);
// console.log(process.env.POKEMON);

function App() {
  const [darkMode, setDarkMode] = useState({ darkMode: true });
  const handleToggle = () => {
    setDarkMode(state => ({ ...state, darkMode: !darkMode.darkMode }));
    faviconToggle();
  };

  const faviconToggle = () => {
    console.log("favicon toggle?");
    let favicon = document.getElementById("favicon");
    // console.log(favicon);
    if (darkMode.darkMode) {
      console.log(favicon.href);
      favicon.href = "/favicon_dcl_light.ico";
      // favicon.href = "%PUBLIC_URL%/favicon_dcl_light.ico";
      // favicon.href = "../public/favicon_dcl_light.ico";
      // favicon.href = "../%PUBLIC_URL%/favicon_dcl_light.ico";
      console.log(favicon.href);
      console.log("Should be light");
    } else {
      console.log(favicon.href);
      favicon.href = "/favicon_dcl_dark.ico";
      // favicon.href = "%PUBLIC_URL%/favicon_dcl_dark.ico";
      // favicon.href = "../public/favicon_dcl_dark.ico";
      // favicon.href = "../%PUBLIC_URL%/favicon_dcl_dark.ico";
      console.log(favicon.href);
      console.log("Should be dark");
    }
    console.log("fin");
  };

  const toggleSwitch = () => {
    return (
      <div
        name="darkMode"
        className={`px-2 self-center rounded border cursor-pointer ${
          darkMode.darkMode
            ? "border-white hover:bg-dclpal1-500"
            : "border-dclpal1-100 hover:bg-dclpal1-100 hover:text-white"
        }`}
        onClick={handleToggle}
      >
        {darkMode.darkMode ? "dark mode on!" : "dark mode?"}
      </div>
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio">
          <Portfolio darkModeApp={darkMode} toggle={toggleSwitch} />
        </Route>
        <Route exact path="/archive">
          <Archive darkModeApp={darkMode} toggle={toggleSwitch} />
        </Route>
        <Route exact path="/meta-portfolio">
          <MetaPortfolio darkModeApp={darkMode} toggle={toggleSwitch} />
        </Route>
        <Route exact path="/">
          <Main darkModeApp={darkMode} toggle={toggleSwitch} />
        </Route>
        <Route path="*">
          <NoMatch darkModeApp={darkMode} toggle={toggleSwitch} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
