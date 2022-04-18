import { useEffect } from "react";
/*CSS*/
import style from "./settingPage.module.scss";
/*CHILD COMPONENTS*/
import { Header } from "../../Layouts/Header/header";
import { Title } from "../../Components/Title/title";
import { ToggleSwitch } from "../../Components/ToggleSwitch/toggleSwitch";

export const SettingPage = (props) => {
  useEffect(() => {
    if (props.darkMode)
      document
        .getElementsByClassName(style.setting)[0]
        .classList.add(style.setting_dark);
    else
      document
        .getElementsByClassName(style.setting)[0]
        .classList.remove(style.setting_dark);
  }, [props.darkMode]);

  return (
    <article className={style.setting}>
      <Header darkMode={props.darkMode} />
      <main>
        <Title darkMode={props.darkMode}>{props.title}</Title>
        <div className={style.settings}>
          <span>
            <ToggleSwitch setDarkMode={props.setDarkMode} />
            <label>حالت تاریک</label>
          </span>
        </div>
      </main>
    </article>
  );
};
