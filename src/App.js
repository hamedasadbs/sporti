/*inner components*/
import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
/*child components*/
import { SlideNav } from "./Layouts/SlideNav/slideNav";
import { BusPage } from "./Pages/BusPage/busPage";
import { SoftwaresPage } from "./Pages/SoftwaresPage/softwaresPage";
import { ProfilePage } from "./Pages/ProfilePage/profilePage";
import { SettingPage } from "./Pages/SettingPage/settingPage";
import { LoadingPage } from "./Pages/LoadingPage/loadingPage";
/*css*/
import style from "./app.module.scss";

export const App = () => {
  /*states*/
  const [loaded, setLoaded] = useState(false);
  const [dashboard, setDashboard] = useState("گذرگاه");
  /*loading screen*/
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  /*get cookie*/
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
  /*state which uses cookie*/
  const [darkMode, setDarkMode] = useState(parseInt(getCookie("darkMode")));
  /*when refresh page go to root*/
  window.onbeforeunload = function () {
    window.setTimeout(function () {
      window.location = "/";
    }, 0);
    window.onbeforeunload = null;
  };
  /*render component*/
  return (
    <div className={style.app}>
      {loaded ? (
        <Router>
          <Switch>
            <Route path="/bus">
              <BusPage
                darkMode={darkMode}
                dashboard={setDashboard}
                title={dashboard}
              />
              <SlideNav darkMode={darkMode} dashboard={setDashboard} />
            </Route>
            <Route path="/softwares">
              <SoftwaresPage
                darkMode={darkMode}
                dashboard={setDashboard}
                title={dashboard}
              />
              <SlideNav darkMode={darkMode} dashboard={setDashboard} />
            </Route>
            <Route path="/profile">
              <ProfilePage
                darkMode={darkMode}
                dashboard={setDashboard}
                title={dashboard}
              />
              <SlideNav darkMode={darkMode} dashboard={setDashboard} />
            </Route>
            <Route path="/setting">
              <SettingPage
                darkMode={darkMode}
                dashboard={setDashboard}
                title={dashboard}
                setDarkMode={setDarkMode}
              />
              <SlideNav darkMode={darkMode} dashboard={setDashboard} />
            </Route>
            <Route exact path="/">
              <Redirect to="/bus" />
            </Route>
          </Switch>
        </Router>
      ) : (
        <LoadingPage darkMode={darkMode} />
      )}
    </div>
  );
};
