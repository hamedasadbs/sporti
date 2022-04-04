import React from "react";
/*CSS*/
import style from "./settingPage.module.scss";
/*CHILD COMPONENTS*/
import { Header } from "../../Layouts/Header/header";

export const SettingPage = (props) => {
  return (
    <article className={style.setting}>
      <Header darkMode={props.darkMode} />
      <main className={style.title}>
        <h1>{props.title}</h1>
      </main>
    </article>
  );
};
