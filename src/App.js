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
  const [mode, setMode] = useState("light");

  const dashboardHandler = (d) => {
    setDashboard(d);
  };

  window.onbeforeunload = function () {
    window.setTimeout(function () {
      window.location = "/";
    }, 0);
    window.onbeforeunload = null;
  };

  const modeHandler = (md) => {
    setMode(md);
  };

  return (
    <div className={style.app}>
      <Router>
        <Switch>
          <Route path="/bus">
            <Bus mode={mode} dashboard={dashboardHandler} title={dashboard} />
            <SlideNav mode={modeHandler} dashboard={dashboardHandler} />
          </Route>
          <Route path="/softwares">
            <Softwares
              mode={mode}
              dashboard={dashboardHandler}
              title={dashboard}
            />
            <SlideNav mode={modeHandler} dashboard={dashboardHandler} />
          </Route>
          <Route exact path="/">
            <Redirect to="/bus" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
