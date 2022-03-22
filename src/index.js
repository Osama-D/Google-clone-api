import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./global.css";
import { ResultContextProvider } from "./contexts/ResultsContentProvider";
ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
