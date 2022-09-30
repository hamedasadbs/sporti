/*INNER-COMPONENTS*/
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
/*CSS*/
import "./index.scss";
import { App } from "./App";
/*ASSETS*/
import { store } from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
