/*INNER-COMPONENTS*/
import { useEffect } from "react";
/*CSS*/
import style from "./toggleSwitch.module.scss";

export const ToggleSwitch = (props) => {
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

  const setCookie = (cName, cValue, minutes) => {
    let d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires;
  };

  const darkModeHadler = () => {
    const switchVar = document.getElementsByClassName(style.switch)[0];
    const brightIcon = document.getElementsByClassName(style.brightIcon)[0];
    const darkIcon = document.getElementsByClassName(style.darkIcon)[0];

    if (parseInt(getCookie("darkMode"))) {
      setCookie("darkMode", 0, 100);
      switchVar.classList.remove(style.switch_dark);
      brightIcon.style.display = "initial";
      darkIcon.style.display = "none";
    } else {
      setCookie("darkMode", 1, 100);
      switchVar.classList.add(style.switch_dark);
      brightIcon.style.display = "none";
      darkIcon.style.display = "initial";
    }
    props.setDarkMode(parseInt(getCookie("darkMode")));
  };

  useEffect(() => {
    const switchVar = document.getElementsByClassName(style.switch)[0];
    const brightIcon = document.getElementsByClassName(style.brightIcon)[0];
    const darkIcon = document.getElementsByClassName(style.darkIcon)[0];

    if (parseInt(getCookie("darkMode"))) {
      switchVar.classList.add(style.switch_dark);
      brightIcon.style.display = "none";
      darkIcon.style.display = "initial";
    } else {
      switchVar.classList.remove(style.switch_dark);
      brightIcon.style.display = "initial";
      darkIcon.style.display = "none";
    }
  }, []);

  return (
    <div onClick={darkModeHadler} className={style.toggle}>
      <div className={style.switch}>
        <i className={`fa fa-sun-o ${style.brightIcon}`}></i>
        <i className={`fa fa-moon-o ${style.darkIcon}`}></i>
      </div>
    </div>
  );
};
