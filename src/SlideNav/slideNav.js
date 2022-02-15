/*INNER-COMPONENTS*/
import { Link } from "react-router-dom";
import { useEffect } from "react";
/*CHILD COMPONENTS*/
import { ToggleSwitch } from "../ToggleSwitch/toggleSwitch";
/*CSS*/
import style from "./slideNav.module.scss";

export const SlideNav = (props) => {
  useEffect(() => {
    const bus = document.getElementById("گذرگاه");
    bus.classList.add(style.activeLink);
  }, []);

  const navHandler = (e) => {
    const nav = document.getElementById(e.target.id);
    const otherId = `:not([id^='${e.target.id}'])`;
    const others = document.querySelectorAll(otherId);
    for (let i = 0; i < others.length; i++) {
      others[i].classList.remove(style.activeLink);
    }
    nav.classList.add(style.activeLink);
    props.dashboard(e.target.id);
  };

  const modeHandler = (md) => {
    props.mode(md);
    const slideNav = document.getElementsByClassName(style.slideNav)[0];
    if (md == "dark") slideNav.classList.add(style.slideNav_dark);
    else slideNav.classList.remove(style.slideNav_dark);
  };

  return (
    <nav className={style.slideNav}>
      <main>
        <ToggleSwitch mode={modeHandler} />
        <span>
          داشبورد <i className="fa fa-tachometer"></i>
        </span>
      </main>
      <Link id="گذرگاه" onClick={navHandler} className={style.link} to="/bus">
        <span id="گذرگاه">گذرگاه</span>
        <i id="گذرگاه" className={`fa fa-usb ${style.bus}`}></i>
      </Link>
      <Link
        id="نرم افزارها"
        onClick={navHandler}
        className={`${style.link}`}
        to="/softwares"
      >
        <span id="نرم افزارها">نرم افزارها</span>
        <i id="نرم افزارها" className="fa fa-laptop"></i>
      </Link>
      <Link
        id="پروفابل"
        onClick={navHandler}
        className={`${style.link}`}
        to="/profile"
      >
        <span id="پروفابل">پروفایل</span>
        <i id="پروفابل" className="fa fa-user-circle"></i>
      </Link>
      <Link
        id="تنظیمات"
        onClick={navHandler}
        className={`${style.link}`}
        to="/settings"
      >
        <span id="تنظیمات">تنظیمات</span>
        <i id="تنظیمات" className="fa fa-cog"></i>
      </Link>
    </nav>
  );
};
