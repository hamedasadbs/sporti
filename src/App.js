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
import { Profile } from "./Profile/profile";
import { Setting } from "./Setting/setting";
/*CSS*/
import style from "./app.module.scss";

export const App = () => {
  const getCookie = (cName) => {
    const nameString = cName + "=";
    const value = document.cookie.split("; ").filter((item) => {
      return item.includes(nameString);
    });
    if (value.length) {
      return value[0].substring(nameString.length, value[0].length);
    } else {
      return "";
    }
  };

  const [dashboard, setDashboard] = useState("گذرگاه");
  const [darkMode, setDarkMode] = useState(getCookie("darkMode"));

  const dashboardHandler = (d) => {
    setDashboard(d);
  };

  window.onbeforeunload = function () {
    window.setTimeout(function () {
      window.location = "/";
    }, 0);
    window.onbeforeunload = null;
  };

  const darkModeHandler = (dm) => {
    setDarkMode(dm);
  };

  return (
    <div className={style.app}>
      <Router>
        <Switch>
          <Route path="/bus">
            <Bus
              darkMode={darkMode}
              dashboard={dashboardHandler}
              title={dashboard}
            />
            <SlideNav
              darkModeHandler={darkModeHandler}
              darkMode={darkMode}
              dashboard={dashboardHandler}
            />
          </Route>
          <Route path="/softwares">
            <Softwares
              darkMode={darkMode}
              dashboard={dashboardHandler}
              title={dashboard}
            />
            <SlideNav
              darkModeHandler={darkModeHandler}
              darkMode={darkMode}
              dashboard={dashboardHandler}
            />
          </Route>
          <Route path="/profile">
            <Profile
              darkMode={darkMode}
              dashboard={dashboardHandler}
              title={dashboard}
            />
            <SlideNav
              darkModeHandler={darkModeHandler}
              darkMode={darkMode}
              dashboard={dashboardHandler}
            />
          </Route>
          <Route path="/setting">
            <Setting
              darkMode={darkMode}
              dashboard={dashboardHandler}
              title={dashboard}
            />
            <SlideNav
              darkModeHandler={darkModeHandler}
              darkMode={darkMode}
              dashboard={dashboardHandler}
            />
          </Route>
          <Route exact path="/">
            <Redirect to="/bus" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
