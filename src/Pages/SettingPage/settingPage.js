/*inner components*/
import { useEffect } from "react";
/*css*/
import style from "./settingPage.module.scss";
/*child components*/
import { Header } from "../../Layouts/Header/header";
import { ToggleSwitch } from "../../Components/ToggleSwitch/toggleSwitch";
import * as dark from "../../Middleware/Library/darkMode";

export const SettingPage = (props) => {
  /*dark mode*/
  useEffect(() => {
    dark.darkMode(style.setting, style.setting_dark, props.darkMode);
  }, [props.darkMode]);
  /*render component*/
  return (
    <article className={style.setting}>
      <Header darkMode={props.darkMode} />
      <main>
        <h1 className={style.title}>{props.title}</h1>
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
