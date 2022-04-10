import { useEffect } from "react";
/*CSS*/
import style from "./settingPage.module.scss";
/*CHILD COMPONENTS*/
import { Header } from "../../Layouts/Header/header";
import { Title } from "../../Components/Title/title";
import userPhoto from "../../Assets/Images/user.jpg";
import { ToggleSwitch } from "../../Components/ToggleSwitch/toggleSwitch";

export const SettingPage = (props) => {
  useEffect(() => {
    if (props.darkMode == 1)
      document
        .getElementsByClassName(style.setting)[0]
        .classList.add(style.setting_dark);
    else
      document
        .getElementsByClassName(style.setting)[0]
        .classList.remove(style.setting_dark);
  }, [props.darkMode]);

  const darkModeHandler = (dm) => {
    props.darkModeHandler(dm);
  };

  return (
    <article className={style.setting}>
      <Header darkMode={props.darkMode} />
      <main>
        <Title>{props.title}</Title>
        <div className={style.settings}>
          <span>
            <ToggleSwitch darkModeHandler={darkModeHandler} />
            <label>حالت تاریک</label>
          </span>
        </div>
      </main>
    </article>
  );
};
