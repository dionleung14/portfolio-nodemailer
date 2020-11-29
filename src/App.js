import React, { useState } from "react";
// import logo from "./logo.svg";
import Main from "./pages/Main";
import Archive from "./pages/Archive";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// console.log(process.env.REACT_APP_POKEMON);
// console.log(process.env.POKEMON);

function App() {
  const [darkMode, setDarkMode] = useState({ darkMode: true });
  const handleToggle = () =>
    setDarkMode(s => ({ ...s, darkMode: !darkMode.darkMode }));

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
        <Route exact path="/archive">
          <Archive darkModeApp={darkMode} toggle={toggleSwitch} />
        </Route>
        <Route path="/">
          <Main darkModeApp={darkMode} toggle={toggleSwitch} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
