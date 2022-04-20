/*inner components*/
import React from "react";
import ReactDOM from "react-dom";
/*css*/
import "./index.module.scss";
/*child components*/
import { App } from "./app";
/*render component*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
