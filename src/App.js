import React, { useState } from "react";
import Nav from "./components/Nav.jsx";
import Router from "./components/Router.jsx";

function App() {
  const [dartTheme, setDarkTheme] = useState(false);
  return (
    <div className={dartTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen overflow-x-hidden">
        <Nav dartTheme={dartTheme} setDarkTheme={setDarkTheme} />
        <Router />
      </div>
    </div>
  );
}

export default App;
