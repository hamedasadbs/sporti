/*inner components*/
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/*css*/
import style from "./header.module.scss";
/*child components*/
import userPhoto from "../../Assets/Images/no_photo.png";
import * as dark from "../../Middleware/Library/darkMode";

export const Header = (props) => {
  /*states*/
  const [showUserInfo, setShowUserInfo] = useState(false);
  /*dark mode*/
  useEffect(() => {
    dark.darkMode(style.header, style.header_dark, props.darkMode);
  }, [props.darkMode]);
  /*display user information*/
  const showUserInfoHandler = () => {
    if (showUserInfo) {
      setShowUserInfo(false);
      document.getElementsByClassName(style.userInfo)[0].style.display = "none";
    } else {
      setShowUserInfo(true);
      document.getElementsByClassName(style.userInfo)[0].style.display =
        "initial";
    }
  };
  /*initialize user information*/
  window.onclick = function (e) {
    if (e.target.id !== "userPhoto" && showUserInfo) {
      showUserInfoHandler();
    }
  };
  /*render component*/
  return (
    <header className={style.header}>
      <div className={style.account}>
        <div className={style.profile}>
          <button id="userPhoto" onClick={showUserInfoHandler}>
            <i id="userPhoto" className="fa fa-angle-down"></i>
            <h1 id="userPhoto">علی علیپور</h1>
            <img src={userPhoto} id="userPhoto" alt="userPhoto" />
          </button>
          <div className={style.userInfo}>
            <span className={style.informations}>
              <img src={userPhoto} alt="userPhoto" />
              <h1>ali_alipour</h1>
              <h1>alialipour1975@yahoo.com</h1>
              <h1>2 months ago</h1>
            </span>
            <nav className={style.choises}>
              <Link to="/profile" className={style.link}>
                <h1>پروفایل</h1>
                <i className="fa fa-user-circle"></i>
              </Link>
              <Link to="/bus" className={style.link}>
                <h1>پیام ها</h1>
                <i className="fa fa-envelope"></i>
              </Link>
              <Link to="/setting" className={style.link}>
                <h1>تنظیمات</h1>
                <i className="fa fa-cog"></i>
              </Link>
              <Link to="/bus" className={style.link}>
                <h1>راهنما</h1>
                <i className="fa fa-question-circle"></i>
              </Link>
              <Link to="/bus" className={style.link}>
                <h1>خروج</h1>
                <i className="fa fa-sign-out"></i>
              </Link>
            </nav>
          </div>
        </div>
        <button className={style.massages}>
          <i className="fa fa-bell-o"></i>
          <div className={style.notifications}>
            <span>1</span>
          </div>
        </button>
      </div>
      <div className={style.search}>
        <input placeholder="جست و جو" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
};
