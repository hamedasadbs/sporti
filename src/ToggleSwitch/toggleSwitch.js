/*INNER-COMPONENTS*/
import { useState } from "react";
/*CSS*/
import style from "./toggleSwitch.module.scss";

export const ToggleSwitch = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const modeHadler = () => {
    const switchVar = document.getElementsByClassName(style.switch)[0];
    const brightIcon = document.getElementsByClassName(style.brightIcon)[0];
    const darkIcon = document.getElementsByClassName(style.darkIcon)[0];

    if (darkMode) {
      props.mode("bright");
      setDarkMode(false);
      switchVar.style.marginLeft = "5px";
      switchVar.style.backgroundColor = "rgb(0, 69, 136)";
      brightIcon.style.display = "initial";
      darkIcon.style.display = "none";
    } else {
      props.mode("dark");
      setDarkMode(true);
      switchVar.style.marginLeft = "30px";
      switchVar.style.backgroundColor = "rgb(0, 14, 28)";
      brightIcon.style.display = "none";
      darkIcon.style.display = "initial";
    }
  };

  return (
    <div onClick={modeHadler} className={style.toggle}>
      <span className={style.switch}>
        <i className={`fa fa-sun-o ${style.brightIcon}`}></i>
        <i className={`fa fa-moon-o ${style.darkIcon}`}></i>
      </span>
    </div>
  );
};
