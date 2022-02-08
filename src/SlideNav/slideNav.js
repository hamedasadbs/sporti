/*INNER-COMPONENTS*/
import { Link } from "react-router-dom";
import { useEffect } from "react";
/*CSS*/
import style from "./slideNav.module.scss";

export const SlideNav = (props) => {
  useEffect(() => {
    const bus = document.getElementById("گذرگاه");
    bus.style.backgroundColor = "rgba(26, 135, 168, 0.8)";
    bus.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
  }, []);

  const navHandler = (e) => {
    const nav = document.getElementById(e.target.id);
    const otherId = `:not([id^='${e.target.id}'])`;
    const others = document.querySelectorAll(otherId);
    for (let i = 0; i < others.length; i++) {
      others[i].style.backgroundColor = "transparent";
      others[i].boxShadow = "none";
    }
    nav.style.backgroundColor = "rgba(26, 135, 168, 0.8)";
    nav.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    props.dashboard(e.target.id);
  };

  return (
    <nav className={style.slideNav}>
      <main>
        <span>داشبورد</span>
        <i className="fa fa-tachometer"></i>
      </main>
      <Link
        id="گذرگاه"
        onClick={navHandler}
        className={`${style.link}`}
        to="/bus"
      >
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
