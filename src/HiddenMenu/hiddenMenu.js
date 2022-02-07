/*INNER-COMPONENTS*/
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
/*CSS*/
import style from "./hiddenMenu.module.scss";

export const HiddenMenu = (props) => {
  const navHandler = (e) => {
    const nav = document.getElementById(e.target.id);
    const otherId = `:not([id^='${e.target.id}'])`;
    const others = document.querySelectorAll(otherId);
    for (let i = 0; i < others.length; i++) {
      others[i].classList.remove(style.activeNav);
    }
    nav.classList.add(style.activeNav);
    props.dashboard(e.target.id);
  };

  useEffect(() => {
    if (props.hiddenMenu) {
      document.getElementsByClassName(style.hiddenMenu)[0].style.top = "-750px";
    } else {
      document.getElementsByClassName(style.hiddenMenu)[0].style.top = "0px";
    }
  }, [props.hiddenMenu]);

  return (
    <nav className={style.hiddenMenu}>
      <h1>
        داشبورد <i className="fa fa-tachometer"></i>
      </h1>
      <Link
        id="گذرگاه"
        onClick={navHandler}
        className={`${style.link} ${style.activeNav}`}
        to="/bus"
      >
        گذرگاه<i className={`fa fa-usb ${style.bus}`}></i>
      </Link>
      <Link
        id="نرم افزارها"
        onClick={navHandler}
        className={`${style.link}`}
        to="/softwares"
      >
        نرم افزارها<i className="fa fa-laptop"></i>
      </Link>
      <Link
        id="پروفابل"
        onClick={navHandler}
        className={`${style.link}`}
        to="/profile"
      >
        پروفایل<i className="fa fa-user-circle"></i>
      </Link>
      <Link
        id="تنظیمات"
        onClick={navHandler}
        className={`${style.link}`}
        to="/settings"
      >
        تنظیمات<i className="fa fa-cog"></i>
      </Link>
    </nav>
  );
};
