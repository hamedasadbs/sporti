/*INNER-COMPONENTS*/
import { Link } from "react-router-dom";
import { useEffect } from "react";
/*CHILD COMPONENTS*/
import { ToggleSwitch } from "../../Components/ToggleSwitch/toggleSwitch";
/*CSS*/
import style from "./slideNav.module.scss";

export const SlideNav = (props) => {
  useEffect(() => {
    const bus = document.getElementById("گذرگاه");
    bus.classList.add(style.activeLink);
  }, []);

  useEffect(() => {
    switch (window.location.href) {
      case "http://localhost:3000/bus":
        hrefNavHandler("گذرگاه");
        break;
      case "http://localhost:3000/softwares":
        hrefNavHandler("نرم افزارها");
        break;
      case "http://localhost:3000/profile":
        hrefNavHandler("پروفایل");
        break;
      case "http://localhost:3000/setting":
        hrefNavHandler("تنظیمات");
        break;
      default:
        break;
    }
  }, [window.location.href]);

  const hrefNavHandler = (e) => {
    const nav = document.getElementById(e);
    const otherId = `:not([id^='${e}'])`;
    const others = document.querySelectorAll(otherId);
    for (let i = 0; i < others.length; i++) {
      others[i].classList.remove(style.activeLink);
    }
    nav.classList.add(style.activeLink);
    props.dashboard(e);
  };

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

  const darkModeHandler = (dm) => {
    props.darkModeHandler(dm);
  };

  return (
    <nav className={style.slideNav}>
      <main>
        <ToggleSwitch darkModeHandler={darkModeHandler} />
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
        id="پروفایل"
        onClick={navHandler}
        className={`${style.link}`}
        to="/profile"
      >
        <span id="پروفایل">پروفایل</span>
        <i id="پروفایل" className="fa fa-user-circle"></i>
      </Link>
      <Link
        id="تنظیمات"
        onClick={navHandler}
        className={`${style.link}`}
        to="/setting"
      >
        <span id="تنظیمات">تنظیمات</span>
        <i id="تنظیمات" className="fa fa-cog"></i>
      </Link>
      <Link className={style.logout}>
        <span>خروج</span>
        <i className="fa fa-sign-out"></i>
      </Link>
    </nav>
  );
};
