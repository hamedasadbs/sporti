/*INNER-COMPONENTS*/
import { useState } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
/*CHILD-COMPONENTS*/
/*->HOME PAGE<-*/
import { HomeHeader } from "./Header/HomeHeader/header";
import { Dropdown } from "./Page/Home/Dropdown/dropdown";
import { HomeSection } from "./Page/Home/Section/section";
import { QAs } from "./Page/Home/QAs/qas";
import { PublicOpinion } from "./Page/Home/PublicOpinion/publicOpinion";
/*->SIGN PAGE<-*/
import { SignHeader } from "./Header/SignHeader/header";
import { SignTab } from "./Page/Sign/Tab/tab";
import { SignSection } from "./Page/Sign/Section/section";
/*->RESTAURANTS PAGE<-*/
import { RestaurantHeader } from "./Header/RestaurantHeader/header";
import { Restaurants } from "./Page/Restaurants/restaurants";
/*->Admin PAGE<-*/
import { AdminHeader } from "./Header/AdminHeader/header";
import { AdminTab } from "./Page/Admin/Tab/tab";
import { AdminSection } from "./Page/Admin/Section/section";
/*->404 PAGE<-*/
import { NotFound } from "./Page/NotFound/notFound";
/*->FOOTER<-*/
import { Footer } from "./Page/Footer/footer";

export const App = () => {
  const [signActiveTab, setSignActiveTab] = useState("login");
  const [adminActiveTab, setAdminActiveTab] = useState("add");

  const signActiveTabHandler = (at) => {
    setSignActiveTab(at);
  };

  const adminActiveTabHandler = (at) => {
    setAdminActiveTab(at);
  };

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

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/sign">
            {getCookie("role") == "1" ? (
              <Redirect to="/admin" />
            ) : (
              <>
                <SignHeader />
                <SignTab activeTab={signActiveTabHandler} />
                <SignSection activeTab={signActiveTab} />
                <Footer />
              </>
            )}
          </Route>
          <Route path="/restaurant">
            {getCookie("role") == "1" ? (
              <Redirect to="/admin" />
            ) : (
              <>
                <RestaurantHeader />
                <Restaurants />
                <Footer />
              </>
            )}
          </Route>
          <Route path='/home'>
            {getCookie("role") == "1" ? (
              <Redirect to="/admin" />
            ) : (
              <>
                <HomeHeader />
                <Dropdown />
                <HomeSection />
                <QAs />
                <PublicOpinion />
                <Footer />
              </>
            )}
          </Route>
          <Route path="/admin">
            {getCookie("role") == "1" ? (
              <>
                <AdminHeader />
                <AdminTab activeTab={adminActiveTabHandler} />
                <AdminSection activeTab={adminActiveTab} />{" "}
              </>
            ) : (
              <Redirect to="/home" />
            )}
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/">
            <SignHeader />
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
