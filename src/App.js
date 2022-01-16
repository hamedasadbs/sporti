/*INNER-COMPONENTS*/
import { useState } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
/*CHILD-COMPONENTS*/
import { SlideNav } from "./SlideNav/slideNav";
import { Dashboard } from "./Dashboard/dashboard";
/*CSS*/
import style from "./app.module.scss";

export const App = () => {
  return (
    <div className={style.app}>
      <Dashboard />
      <SlideNav />
    </div>
  );
};
