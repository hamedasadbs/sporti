/*INNER-COMPONENTS*/
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
/*CSS*/
import "./index.scss";
import { App } from "./App";
/*ASSETS*/
import { store } from "./Redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
