import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/**
 * Bootleg way of recovering from overnight crash
 * API tends to change unexpectedly in the night
 */
const reloadBrowserEvery = (interval: number) => {
  setTimeout(() => {
    reloadBrowserEvery(interval);
    location.reload();
  }, interval);
};

const FIVE_MINUTES = 5 * 60 * 1000;

reloadBrowserEvery(FIVE_MINUTES);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
