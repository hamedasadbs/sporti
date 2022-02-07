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
import { Bus } from "./Bus/bus";
import { Softwares } from "./Softwares/softwares";
/*CSS*/
import style from "./app.module.scss";

export const App = () => {
  const [dashboard, setDashboard] = useState("گذرگاه");
  const dashboardHandler = (d) => {
    setDashboard(d);
  };

  window.onbeforeunload = function () {
    window.setTimeout(function () {
      window.location = "/";
    }, 0);
    window.onbeforeunload = null;
  };

  return (
    <div className={style.app}>
      <Router>
        <Switch>
          <Route path="/bus">
            <Bus title={dashboard} />
            <SlideNav dashboard={dashboardHandler} />
          </Route>
          <Route path="/softwares">
            <Softwares title={dashboard} />
            <SlideNav dashboard={dashboardHandler} />
          </Route>
          <Route exact path="/">
            <Redirect to="/bus" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
